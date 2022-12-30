const User = require("../models/User.model");
const Report = require("../models/Report.model");
const Block = require("../models/Block.model");
const Sequelize = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const APIError = require("../utils/APIError");
const messages = require("../utils/constants");
const status = require("http-status");
const Like = require("../models/Like.model");
const UserProfile = require("../models/UserProfile.model");
const BodyType = require("../models/BodyType.model");
const Ethnicity = require("../models/Ethnicity.model");
const HairColor = require("../models/HairColor.model");
const Education = require("../models/Education.model");
const Children = require("../models/Children.model");
const Occupation = require("../models/Occupation.model");
const UserPreference = require("../models/UserPreference.model");
const RelationshipStatus = require("../models/RelationshipStatus.model");
const UserTag = require("../models/UserTag.model");
const Tag = require("../models/Tag.model");
const View = require("../models/View.model");
const UserSearch = require("../models/UserSearch.model");
const UserFcmTokens = require("../models/UserFcmToken.model");
const { sendUnscheduledNotification } = require("../utils/sendNotification");
const haversine = require("haversine");
const { BOOLEAN } = require("sequelize");
const { loggers } = require("winston");
const { Pool, Client } = require("pg");
const UserRelationship = require("../models/UserRelationship.model");
const UserBodyTypes = require("../models/UserBodyType.model");
const UserEthnicity = require("../models/UserEthnicity.model");
const UserHairColor = require("../models/UserHairColor.model");
const UserEducations = require("../models/UserEducation.model");
const UserChildren = require("../models/UserChildren.model");
const UserOccupation = require("../models/UserOccupation.model");
const Faq = require("../models/Faq.model");

const getCommonWhereCondition = async (req, where = {}) => {
  let blocks = await Block.findAll({
    attributes: ["against"],
    where: {
      from: req.user.id
    }
  });

  let reports = await Report.findAll({
    attributes: ["against"],
    where: {
      from: req.user.id
    }
  });

  if (blocks?.length > 0 || reports?.length > 0) {
    if (blocks) blocks = blocks?.map((u) => u.get("against"));
    else {
      blocks = [];
    }
    if (reports) reports = reports?.map((u) => u.get("against"));
    else reports = [];

    const blocked = [...blocks, ...reports];
    if (blocked) {
      where.id = {
        [Op.notIn]: blocked ? blocked : []
      };
    }

    return where;
  } else {
    return where;
  }
};

const getUserPreferenceCondition = async (req, activeUserSearch = null) => {
  const where = {};

  if (!activeUserSearch) {
    activeUserSearch = await UserSearch.findOne({
      isActive: true,
      userId: req.user.id
    });
  }

  if (activeUserSearch) {
    if (activeUserSearch.minNetWorth && activeUserSearch.maxNetWorth) {
      where.netWorth = {
        [Op.between]: [
          parseInt(activeUserSearch.minNetWorth),
          parseInt(activeUserSearch.maxNetWorth)
        ]
      };
    }

    if (activeUserSearch.minHeight) {
      where.height = {
        [Op.gt]: activeUserSearch.minHeight
      };
    }

    if (activeUserSearch.maxHeight) {
      where.height = {
        [Op.lt]: activeUserSearch.maxHeight
      };
    }

    if (activeUserSearch.jobTitle && activeUserSearch.jobTitle != "") {
      where.jobTitle = {
        [Op.like]: `%${activeUserSearch.jobTitle}%`
      };
    }

    if (activeUserSearch.occupations.length > 0) {
      where.occupationId = {
        [Op.in]: activeUserSearch.occupations
      };
    }

    if (activeUserSearch.childrenIds.length > 0) {
      where.childrenId = {
        [Op.in]: activeUserSearch.childrenIds
      };
    }

    if (activeUserSearch.educationIds.length > 0) {
      where.educationId = {
        [Op.in]: activeUserSearch.educationIds
      };
    }

    if (activeUserSearch.heirTypeIds.length > 0) {
      where.hairColorId = {
        [Op.in]: activeUserSearch.heirTypeIds
      };
    }

    if (activeUserSearch.relationshipStatusIds.length > 0) {
      where.relationshipStatusId = {
        [Op.in]: activeUserSearch.relationshipStatusIds
      };
    }

    return where;
  }
};

exports.getCommonWhereCondition = getCommonWhereCondition;
exports.getUserPreferenceCondition = getUserPreferenceCondition;

exports.index = catchAsync(async (req, res, next) => {
  res.status(200).send({ message: success });
  // try {
  //   const options = {
  //     select:'*',
  //     limit: 5,
  //     order: [["id", "DESC"]],
  //   };

  //   const users = await User.findAndCountAll(options);
  //   res.status(200).send({
  //     status: "success",
  //     data: {
  //       users: users.rows,
  //       pages: Math.ceil(users.count / 5),
  //     },
  //   });
  // } catch (error) {
  //   res.status(500).send({ message: error.message });
  // }
});

exports.blockUser = async (req, res, next) => {
  try {
    const userExists = await User.findByPk(req.params.id);
    if (!userExists) {
      throw new Error("User you want to report not found");
    }
    const clause = {
      from: req.user.id,
      against: parseInt(req.params.id)
    };
    const alreadyBlocked = await Block.findOne({ where: clause });
    if (alreadyBlocked) {
      throw new Error(messages.ALREADY_BLOCKED);
    }
    const blockObj = await Block.create(clause);
    res.status(200).send({
      status: "success",
      data: blockObj
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.sendPushNotification = async (req, res, next) => {
  console.log("req.body", req.user.id, req.body.data);
  try {
    let userFcmTokensOb = await User.findOne({
      where: {
        id: req.body.data.id
      }
    });
    const clause = {
      from: parseInt(req.params.id),
      against: req.user.id
    };
    const alreadyBlocked = await Block.findOne({ where: clause });

    console.log("alreadyBlockedalreadyBlocked", alreadyBlocked);

    if (userFcmTokensOb) {
      console.log(
        "req?.body?.data?.profileImage",
        req?.body?.data?.profileImage
      );
      let notification_options = {
        regTokens: userFcmTokensOb.deviceToken,
        notificationMsg: {
          data: {
            token: req?.body?.data?.token,
            screenName: req?.body?.data?.screenName,
            name: req?.body?.data?.name,
            thread: req?.body?.data?.thread,
            profileImage: req?.body?.data?.profileImage,
            id: req?.body?.data?.id.toString(),
            senderId: req.user.id.toString()
            // actions: ["hello", "welcome"].toString(),
          },
          notification: {
            title: req?.body?.data?.name,
            body: req?.body?.data?.message.toString(),
            image: req?.body?.data?.profileImage,
            actions: [
              {
                title: "Like",
                action: "like"
              },
              {
                title: "Unsubscribe",
                action: "unsubscribe"
              }
            ].toString()
          }
        }
      };
      console.log(
        "userFcmTokensOb.someoneSendMeMessage",
        userFcmTokensOb.someoneSendMeMessage
      );
      if (
        userFcmTokensOb.someoneSendMeMessage === false && alreadyBlocked
      ) {
        res.status(200).send({
          status: "success",
          data: {}
        });
      } else {
        const result = sendUnscheduledNotification(notification_options);
        res.status(200).send({
          status: "success",
          data: result
        });
      }
    } else {
      throw new Error("User's FCM token not found");
    }
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.reportUser = async (req, res, next) => {
  try {
    const userExists = await User.findByPk(req.params.id);
    if (!userExists) {
      throw new Error("User you want to report not found");
    }
    let {
      body: { reason, note }
    } = req;
    const clause = {
      from: req.user.id,
      against: parseInt(req.params.id)
    };
    const alreadyReported = await Report.findOne({
      where: clause
    });
    if (alreadyReported) {
      throw new Error(messages.ALREADY_REPORTED);
    }
    const createObject = { ...clause, reason, note };
    const reportObject = await Report.create(createObject);
    res.status(200).send({
      status: "success",
      data: reportObject
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.likeUser = async (req, res, next) => {
  try {
    const userExists = await User.findByPk(req.params.id);
    if (!userExists) {
      throw new Error("User you want to like not found");
    }
    const clause = {
      where: {
        from: req.user.id,
        to: parseInt(req.params.id)
      }
    };
    const alreadyLiked = await Like.findOne(clause);
    if (alreadyLiked) {
      throw new Error(messages.ALREADY_LIKED);
    } else {
      const likeObject = await Like.create(clause.where);
      let userFcmTokensOb = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      if (userFcmTokensOb) {
        let notification_options = {
          regTokens: userFcmTokensOb.deviceToken,
          notificationMsg: {
            data: {
              screenName: "LikedUser"
            },
            notification: {
              title: "LikedUser",
              body: "User has liked you to express interest into your profile."
            }
          }
        };
        if (userFcmTokensOb.someoneSendMeMessage === true) {
          var result = sendUnscheduledNotification(notification_options);
        }
        console.log("result", result);
      }

      const match = await Like.findOne({
        where: {
          to: req.user.id,
          from: parseInt(req.params.id)
        }
      });

      res.status(200).send({
        status: "success",
        data: likeObject,
        itsMatch: match ? true : false
      });
    }
  } catch (error) {
    console.log("Error in Like", error);
    res.status(200).send({
      status: status.BAD_REQUEST,
      message: error.message
    });

    //return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.getListOfAllUsersLikedByMe = async (req, res, next) => {
  try {
    const likedUsers = await User.findOne({
      where: {
        id: req.user.id
      },
      include: [
        {
          model: Like,
          as: "likeFrom",
          include: {
            model: User,
            include: [
              "UserPhotos",
              {
                model: UserProfile,
                include: [
                  {
                    model: BodyType,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Ethnicity,
                    attributes: ["id", "name"]
                  },
                  {
                    model: HairColor,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Education,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Children,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Occupation,
                    attributes: ["id", "name"]
                  }
                ]
              },
              {
                model: UserPreference,
                include: [
                  {
                    model: UserRelationship,
                    include: [
                      {
                        model: RelationshipStatus,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserBodyTypes,
                    include: [
                      {
                        model: BodyType,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEthnicity,
                    include: [
                      {
                        model: Ethnicity,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserHairColor,
                    include: [
                      {
                        model: HairColor,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEducations,
                    include: [
                      {
                        model: Education,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserChildren,
                    include: [
                      {
                        model: Children,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserOccupation,
                    include: [
                      {
                        model: Occupation,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserTag,
                    include: [
                      {
                        model: Tag,
                        attributes: ["id", "name"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    });
    let response = likedUsers.likeFrom.map((ins) => {
      return ins.User;
    });
    res.status(200).send({
      status: "success",
      data: response
    });
  } catch (error) {
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.getListOfAllUsersWhoLikeMe = async (req, res, next) => {
  try {
    const likedUsers = await User.findAll({
      include: [
        {
          where: {
            to: req.user.id
          },
          model: Like,
          as: "likeFrom",
          include: {
            model: User,
            include: [
              "UserPhotos",
              {
                model: UserProfile,
                include: [
                  {
                    model: BodyType,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Ethnicity,
                    attributes: ["id", "name"]
                  },
                  {
                    model: HairColor,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Education,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Children,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Occupation,
                    attributes: ["id", "name"]
                  }
                ]
              },
              {
                model: UserPreference,
                include: [
                  {
                    model: UserRelationship,
                    include: [
                      {
                        model: RelationshipStatus,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserBodyTypes,
                    include: [
                      {
                        model: BodyType,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEthnicity,
                    include: [
                      {
                        model: Ethnicity,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserHairColor,
                    include: [
                      {
                        model: HairColor,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEducations,
                    include: [
                      {
                        model: Education,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserChildren,
                    include: [
                      {
                        model: Children,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserOccupation,
                    include: [
                      {
                        model: Occupation,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserTag,
                    include: [
                      {
                        model: Tag,
                        attributes: ["id", "name"]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          required: true
        },
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: UserPreference,
          include: [
            {
              model: UserRelationship,
              include: [
                {
                  model: RelationshipStatus,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserBodyTypes,
              include: [
                {
                  model: BodyType,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserEthnicity,
              include: [
                {
                  model: Ethnicity,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserHairColor,
              include: [
                {
                  model: HairColor,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserEducations,
              include: [
                {
                  model: Education,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserChildren,
              include: [
                {
                  model: Children,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserOccupation,
              include: [
                {
                  model: Occupation,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserTag,
              include: [
                {
                  model: Tag,
                  attributes: ["id", "name"]
                }
              ]
            }
          ]
        }
      ]
    });
    res.status(200).send({
      status: "success",
      data: likedUsers
    });
  } catch (error) {
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error("User not found");
    }
    await User.destroy({
      where: {
        id: req.user.id
      }
    });
    res.status(200).send({
      status: "success"
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.disableAccount = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error("User not found");
    }
    await User.update(
      {
        isDisabled: true
      },
      {
        where: {
          id: req.user.id
        }
      }
    );
    res.status(200).send({
      status: "success"
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.getListOfAllUsersViewedByMe = async (req, res, next) => {
  try {
    const viewedUsers = await User.findOne({
      where: {
        id: req.user.id
      },
      include: [
        {
          model: View,
          as: "viewFrom",
          include: {
            model: User,
            include: [
              "UserPhotos",
              {
                model: UserProfile,
                include: [
                  {
                    model: BodyType,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Ethnicity,
                    attributes: ["id", "name"]
                  },
                  {
                    model: HairColor,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Education,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Children,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Occupation,
                    attributes: ["id", "name"]
                  }
                ]
              },
              {
                model: UserPreference,
                include: [
                  {
                    model: UserRelationship,
                    include: [
                      {
                        model: RelationshipStatus,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserBodyTypes,
                    include: [
                      {
                        model: BodyType,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEthnicity,
                    include: [
                      {
                        model: Ethnicity,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserHairColor,
                    include: [
                      {
                        model: HairColor,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEducations,
                    include: [
                      {
                        model: Education,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserChildren,
                    include: [
                      {
                        model: Children,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserOccupation,
                    include: [
                      {
                        model: Occupation,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserTag,
                    include: [
                      {
                        model: Tag,
                        attributes: ["id", "name"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    });
    let response = viewedUsers.viewFrom.map((ins) => {
      return ins.User;
    });
    res.status(200).send({
      status: "success",
      data: response
    });
  } catch (error) {
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.getListOfAllUsersWhoViewedMe = async (req, res, next) => {
  try {
    const viewedUsers = await User.findAll({
      include: [
        {
          where: {
            to: req.user.id
          },
          model: View,
          as: "viewFrom",
          include: {
            model: User,
            include: [
              "UserPhotos",
              {
                model: UserProfile,
                include: [
                  {
                    model: BodyType,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Ethnicity,
                    attributes: ["id", "name"]
                  },
                  {
                    model: HairColor,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Education,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Children,
                    attributes: ["id", "name"]
                  },
                  {
                    model: Occupation,
                    attributes: ["id", "name"]
                  }
                ]
              },
              {
                model: UserPreference,
                include: [
                  {
                    model: UserRelationship,
                    include: [
                      {
                        model: RelationshipStatus,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserBodyTypes,
                    include: [
                      {
                        model: BodyType,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEthnicity,
                    include: [
                      {
                        model: Ethnicity,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserHairColor,
                    include: [
                      {
                        model: HairColor,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserEducations,
                    include: [
                      {
                        model: Education,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserChildren,
                    include: [
                      {
                        model: Children,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserOccupation,
                    include: [
                      {
                        model: Occupation,
                        attributes: ["id", "name"]
                      }
                    ]
                  },
                  {
                    model: UserTag,
                    include: [
                      {
                        model: Tag,
                        attributes: ["id", "name"]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          required: true
        },
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: UserPreference,
          include: [
            {
              model: UserRelationship,
              include: [
                {
                  model: RelationshipStatus,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserBodyTypes,
              include: [
                {
                  model: BodyType,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserEthnicity,
              include: [
                {
                  model: Ethnicity,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserHairColor,
              include: [
                {
                  model: HairColor,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserEducations,
              include: [
                {
                  model: Education,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserChildren,
              include: [
                {
                  model: Children,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserOccupation,
              include: [
                {
                  model: Occupation,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserTag,
              include: [
                {
                  model: Tag,
                  attributes: ["id", "name"]
                }
              ]
            }
          ]
        }
      ]
    });
    res.status(200).send({
      status: "success",
      data: viewedUsers
    });
  } catch (error) {
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.viewUser = async (req, res, next) => {
  try {
    const userExists = await User.findByPk(req.params.id, {
      include: [
        {
          model: UserPhoto
        },
        {
          model: UserProfile,
          include: [
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: UserPreference,
          include: [
            {
              model: UserRelationship,
              include: [
                {
                  model: RelationshipStatus,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserBodyTypes,
              include: [
                {
                  model: BodyType,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserEthnicity,
              include: [
                {
                  model: Ethnicity,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserHairColor,
              include: [
                {
                  model: HairColor,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserEducations,
              include: [
                {
                  model: Education,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserChildren,
              include: [
                {
                  model: Children,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserOccupation,
              include: [
                {
                  model: Occupation,
                  attributes: ["id", "name"]
                }
              ]
            },
            {
              model: UserTag,
              include: [
                {
                  model: Tag,
                  attributes: ["id", "name"]
                }
              ]
            }
          ]
        }
      ]
    });
    if (!userExists) {
      throw new Error("User you want to view not found");
    }
    const clause = {
      where: {
        from: req.user.id,
        to: parseInt(req.params.id)
      }
    };

    const alreadyViewed = await View.findOne(clause);

    if (!alreadyViewed) {
      if (userExists.showWhenViewSomeone === true) {
        await View.create(clause.where);
      }
    }
    res.status(200).send({
      status: "success",
      data: userExists
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

// exports.likeUser = async (req, res, next) => {
//   try {
//     const userExists = await User.findByPk(req.params.id);
//     if (!userExists) {
//       throw new Error("User you want to like not found");
//     }
//     const like = {
//       where: {
//         from: req.user.id,
//         to: parseInt(req.params.id),
//       },
//     };
//     const alreadyLiked = await Like.findOne(like);
//     if (alreadyLiked) {
//       throw new Error(messages.ALREADY_LIKED);
//     }
//     const likeObject = await Like.create(like.where);
//     res.status(200).send({
//       status: "success",
//       data: likeObject,
//     });
//   } catch (error) {
//     return next(new APIError(error, status.BAD_REQUEST));
//   }
// };

exports.showOnlineStatus = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  // let onlineStatus = !User.onlineStatus;

  try {
    await User.update(
      { onlineStatus: !user.onlineStatus },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const user1 = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: user1
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showJoiningDate = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  // let onlineStatus = !User.onlineStatus;

  try {
    await User.update(
      { joiningDate: !user.joiningDate },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const user1 = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: user1
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showRecentLoginLocation = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  // let onlineStatus = !User.onlineStatus;

  try {
    await User.update(
      { showRecentLocation: !user.showRecentLocation },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const user1 = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: user1
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showInSearch = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  // let onlineStatus = !User.onlineStatus;

  try {
    await User.update(
      { showInSearch: !user.showInSearch },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const user1 = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: user1
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showFavouritedOne = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  // let onlineStatus = !User.onlineStatus;

  try {
    await User.update(
      { showFavouritedOne: !user.showFavouritedOne },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const user1 = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: user1
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showWhenViewSomeone = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  // let onlineStatus = !User.onlineStatus;

  try {
    await User.update(
      { showWhenViewSomeone: !user.showWhenViewSomeone },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const user1 = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: user1
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};
exports.showWhenViewSomeOne = async (req, res, next) => {
  try {
    let {
      user: { id },
      body: { showWhenViewSomeOne }
    } = req;

    await User.update(
      {
        showWhenViewSomeOne: showWhenViewSomeOne
      },
      {
        where: {
          id: id
        }
      }
    );
    res.status(200).send({
      status: "success"
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.showSomeOneFavouritedMe = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  try {
    await User.update(
      { someoneFavouritedMe: !user.someoneFavouritedMe },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const updatedUser = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: updatedUser
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showSomeOneSendMeMessage = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  try {
    await User.update(
      { someoneSendMeMessage: !user.someoneSendMeMessage },
      {
        where: {
          id: req.user.id
        }
      }
    );

    const updatedUser = await User.findOne({
      where: {
        id: req.user.id
      }
    });

    res.status(200).send({
      status: "success",
      data: updatedUser
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

const { Op } = require("sequelize");
const { UserPhoto } = require("../models");

exports.showLatestUser = async (req, res, next) => {
  let where = await getCommonWhereCondition(req, {
    // profileCompletionPercentage: 25,
    [Op.not]: {
      gender: req.user.gender
    },
    isDisabled: false
  });
  const includes = [
    {
      model: UserPhoto
    }
  ];
  const prefrenceWhere = await getUserPreferenceCondition(req);
  if (prefrenceWhere) {
    includes.push({
      model: UserProfile,
      where: prefrenceWhere,
      required: true
    });
  }
  const user = await User.findAll({
    where: where,
    order: [["id", "DESC"]],
    include: includes
  });

  try {
    await User.update(
      { showLatestUser: !user.showLatestUser },
      {
        where: { id: req.user.id }
      }
    );

    res.status(200).send({
      status: "latest users",
      data: user
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showNearByUser = async (req, res, next) => {
  try {
    // const pool = new Pool({
    //   user: 'postgres',
    //   host: 'localhost',
    //   database: 'boss-dater-backend',
    //   password: 'admin',
    //   port: 5432,
    // })
    // pool.query('SELECT NOW()', (err, res) => {
    //   console.log(err, res)
    //   pool.end()
    // })
    //   let client = new Client({
    //     user: 'postgres',
    //     host: 'localhost',
    //     database: 'boss-dater-backend',
    //     password: 'admin',
    //     port: 5432,
    // })
    //   client.connect()
    // client.query('SELECT NOW()', (err, res) => {
    //   console.log(err, res)
    //   console.log("asdasd")

    // })

    // const userLatlng = ["31.465564", "74.417984"]
    // const radius = 10

    // const _q = `SELECT * FROM "UserProfiles" WHERE ( $1 <= ( latitude + (0.00898315284 * $3) ) ) AND ( $1 >= ( latitude - (0.00898315284 * $3) ) ) AND ( $2 <= ( longitude + (0.00898315284 * $3) ) ) AND ( $2 >= ( longitude - (0.00898315284 * $3) ) )`

    // const query = {
    //   // give the query a unique name
    //   name: 'fetch-user',
    //   // text: 'SELECT * FROM "Users" WHERE id > $1 limit $2',
    //   text: _q,
    //   values: [userLatlng[0], userLatlng[1], radius],
    // }
    // callback
    // client.query(query, (err, res) => {
    //   if (err) {
    //     console.log(err.stack)
    //   } else {
    //     console.log(res.rows[0])
    //   }
    // })
    // promise
    // let myres = await client
    //   .query(query)
    // .then(res => console.log(res.rows[0]))
    // .catch(e => console.error(e.stack))

    //   client.end()
    // let res1 = "hhh"
    // return res.send({
    //   "rows": myres
    //   // "hello": await User.findAll()
    // })

    // return res.send({
    //   hello: "world",
    //   query: req.query
    // })

    let { latitude, longitude } = req.query;
    // return res.send({
    //   lat: latitude,
    //   lng: longitude
    // })
    let loggedInUser = await User.findOne({
      where: { id: req.user.id },
      include: [
        {
          model: UserPhoto
        },
        {
          model: UserProfile,
          include: [
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            }
          ]
        }
      ]
    });

    let where = await getCommonWhereCondition(req, {
      isDisabled: false
    });

    const includes = [
      {
        model: UserPhoto
      }
    ];
    let wherePreference = {};
    const prefrenceWhere = await getUserPreferenceCondition(req);
    if (prefrenceWhere) {
      wherePreference = { ...wherePreference, ...prefrenceWhere };
    }

    let users = await User.findAll({
      where: where,
      include: [
        {
          where: wherePreference,
          model: UserProfile,
          include: [
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            }
          ]
        }
      ]
    });
    let nearByUsers = [];

    for (let i = 0; i < users.length; i++) {
      const plainUser = users[i];
      let user = plainUser;

      if (
        user.UserProfile &&
        user.UserProfile.latitude &&
        user.UserProfile.longitude
      ) {
        let distanceInKM = Math.round(
          haversine(
            {
              latitude: latitude ? latitude : loggedInUser.UserProfile.latitude,
              longitude: longitude
                ? longitude
                : loggedInUser.UserProfile.longitude
            },
            {
              latitude: user.UserProfile.latitude,
              longitude: user.UserProfile.longitude
            }
          ) / 1000
        );

        if (distanceInKM >= 0 && distanceInKM <= 45) {
          nearByUsers.push(user);
        }
      }
    }

    return res.status(200).send({
      status: "nearby users",
      data: nearByUsers
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

exports.showRecentlyActiveUser = async (req, res, next) => {
  try {
    const prefrenceWhere = await getUserPreferenceCondition(req);

    let where = await getCommonWhereCondition(req, {
      // profileCompletionPercentage: 25,
      [Op.not]: {
        gender: req.user.gender
      },
      isDisabled: false
    });

    const user = await User.findAll({
      where: where,
      order: [["id", "DESC"]],
      include: [
        {
          model: UserProfile,
          required: true,
          where: prefrenceWhere
        },
        {
          model: UserPhoto
        }
      ]
    });

    await User.update(
      { showRecentlyActiveUser: !user.showRecentlyActiveUser },
      {
        where: { id: req.user.id }
      }
    );

    res.status(200).send({
      status: "Recently Active users",
      data: user
    });
  } catch (error) {
    console.log("error is", error);
    return next(new APIError(error, status.BAD_REQUEST));
  }
};

// Create user search here
//accepts post request with params

exports.saveUserSearch = async (req, res, next) => {
  try {
    if (req.params.id) {
      const userSearchExists = await UserSearch.findOne({
        where: {
          userId: req.user.id,
          id: req.params.id
        }
      });

      if (!userSearchExists) {
        throw new Error("User Search not found");
      } else {
        await UserSearch.update(
          { ...userSearchExists, ...req.body },
          {
            where: {
              id: req.params.id
            }
          }
        );
        const updatedUser = await UserSearch.findByPk(req.params.id);
        res.status(200).send({
          status: "success",
          messages: "Saved search updated successfully",
          data: updatedUser
        });
      }
    } else {
      const userSearchExists = await UserSearch.findOne({
        where: {
          userId: req.user.id,
          searchName: req.body.searchName
        }
      });
      if (userSearchExists) {
        throw new Error("You are using duplicate search name.");
      } else {
        const createObject = { ...req.body, userId: req.user.id };
        console.log("createObjectcreateObject", createObject);
        const searchObject = await UserSearch.create(createObject);
        res.status(200).send({
          status: "success",
          messages: "Saved search created successfully",
          data: searchObject
        });
      }
    }
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

// get user search here
//get request to get all searches associated with user

exports.getUserSearches = async (req, res, next) => {
  try {
    const searches = await UserSearch.findAll({
      where: {
        userId: req.user.id
      },
      order: [["createdAt", "DESC"]]
    });

    console.log("searches", searches);

    res.status(200).send({
      status: "success",
      data: searches
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

// get user search here
//get request to get all searches associated with user

exports.getUserSearchById = async (req, res, next) => {
  try {
    const userSearchExists = await UserSearch.findByPk(req.params.id);
    if (!userSearchExists) {
      throw new Error("User Search you want to get not found");
    }

    res.status(200).send({
      status: "success",
      data: userSearchExists
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

// delete users search here

exports.deleteUserSearchById = async (req, res, next) => {
  try {
    if (req.params.id) {
      const userSearchExists = await UserSearch.findOne({
        where: {
          userId: req.user.id,
          id: req.params.id
        }
      });

      if (!userSearchExists) {
        throw new Error("User Search not found");
      } else {
        await UserSearch.destroy({
          where: {
            id: req.params.id
          }
        });
        res.status(200).send({
          status: "success",
          messages: "Saved search deleted successfully"
        });
      }
    } else {
      throw new Error("UserSearch Id missing");
    }
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

// delete users search here

exports.activateUserSearchById = async (req, res, next) => {
  try {
    if (req.params.id) {
      const userSearchExists = await UserSearch.findOne({
        where: {
          userId: req.user.id,
          id: req.params.id
        }
      });

      if (!userSearchExists) {
        throw new Error("User Search not found");
      } else {
        await UserSearch.update(
          {
            isActive: false
          },
          {
            where: {
              userId: req.user.id
            }
          }
        );

        await UserSearch.update(
          {
            isActive: !userSearchExists.isActive
          },
          {
            where: {
              id: req.params.id
            }
          }
        );
        res.status(200).send({
          status: "success",
          messages: "Saved search activated successfully"
        });
      }
    } else {
      throw new Error("UserSearch Id missing");
    }
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

// delete users search here

exports.getUserHistory = async (req, res, next) => {
  try {
    if (req.params.id) {
      const userSearchExists = await User.findOne({
        where: {
          id: req.params.id
        }
      });

      if (!userSearchExists) {
        throw new Error("User Search not found");
      } else {
        const data = {};
        data.createdAt = userSearchExists.createdAt;

        const theyViewed = await View.findOne({
          from: req.params.id,
          to: req.user.id
        });
        console.log("theyViewed", req.params.id, theyViewed);

        if (theyViewed !== undefined) {
          data.theyViewed = true;
        }

        const theyLiked = await Like.findOne({
          from: req.params.id,
          to: req.user.id
        });
        if (theyLiked !== undefined) {
          data.theyLiked = true;
        }

        res.status(200).send({
          data: data,
          status: "success"
        });
      }
    } else {
      throw new Error("UserSearch Id missing");
    }
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};

exports.getUserFaq = async (req, res, next) => {
  try {
    let FaqData = await Faq.findAll();

    console.log("FaqDataFaqData", FaqData);

    res.status(200).send({
      data: FaqData,
      status: "success"
    });
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};
