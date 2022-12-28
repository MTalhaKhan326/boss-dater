const UserPreference = require("../models/UserPreference.model");
const Sequelize = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const status = require("http-status");
const {
  UserTag,
  User,
  UserProfile,
  RelationshipStatus,
  BodyType,
  Ethnicity,
  HairColor,
  Education,
  Children,
  Occupation,
  Tag,
  UserPhoto
} = require("../models");
const messages = require("../utils/constants");
const { Model, DataTypes, json } = require("sequelize");
const sequelize = require("../config/db.config");
const {
  DEFAULT_PERCENTAGE,
  PROFILE_PERCENTAGE,
  IMAGE_UPLOAD_PERCENTAGE,
  RELATIONSHIP_INTENT_PERCENTAGE
} = require("../utils/constants");
const UserRelationship = require("../models/UserRelationship.model");
const UserOccupation = require("../models/UserOccupation.model");
const UserChildren = require("../models/UserChildren.model");
const UserEducations = require("../models/UserEducation.model");
const UserHairColor = require("../models/UserHairColor.model");
const UserEthnicity = require("../models/UserEthnicity.model");
const UserBodyTypes = require("../models/UserBodyType.model");
exports.create = catchAsync(async (req, res) => {
  let params = ({
    occupationId,
    description,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    relationshipStatusId,
    tagIds,
    deviceToken
  } = req.body);
  let male = {};
  let female = {};

  if (req.user.gender == "male") {
    male = { bodyTypeId, ethnicityId, hairColorId, educationId, childrenId } =
      req.body;
  } else {
    female = {
      //men
      jobTitle,
      linkedin,
      netWorth
    } = req.body;
  }

  const newParams = { ...params, ...male, ...female };
  console.log("params", newParams, req.user.gender);

  // await UserPreference.update({deviceToken},{
  //   where: {
  //     userId: req.user.id,
  //   },
  // });

  try {
    await UserPreference.update(newParams, {
      where: {
        userId: req.user.id
      }
    });
    const userPreference = await UserPreference.findOne({
      where: {
        userId: req.user.id
      }
    });
    if (userPreference != null) {
      await UserTag.destroy({ where: { userPreferenceId: userPreference.id } });
      await UserOccupation.destroy({
        where: { userPreferenceId: userPreference.id }
      });
      await UserRelationship.destroy({
        where: { userPreferenceId: userPreference.id }
      });
      if (req.user.gender == "male") {
        await UserBodyTypes.destroy({
          where: { userPreferenceId: userPreference.id }
        });
        await UserChildren.destroy({
          where: { userPreferenceId: userPreference.id }
        });
        await UserEducations.destroy({
          where: { userPreferenceId: userPreference.id }
        });
        await UserEthnicity.destroy({
          where: { userPreferenceId: userPreference.id }
        });
        await UserHairColor.destroy({
          where: { userPreferenceId: userPreference.id }
        });
      }

      if (req.user.gender == "male") {
        await Promise.all(
          tagIds?.map(async (tagId) => {
            await UserTag.create({
              userPreferenceId: userPreference.id,
              tagId: tagId
            });
          }),
          occupationId?.map(async (o_id) => {
            await UserOccupation.create({
              userPreferenceId: userPreference.id,
              occupationId: o_id
            });
          }),
          relationshipStatusId?.map(async (r_id) => {
            await UserRelationship.create({
              userPreferenceId: userPreference.id,
              relationshipId: r_id
            });
          }),

          bodyTypeId?.map(async (b_id) => {
            await UserBodyTypes.create({
              userPreferenceId: userPreference.id,
              bodyTypesId: b_id
            });
          }),
          ethnicityId?.map(async (e_id) => {
            await UserEthnicity.create({
              userPreferenceId: userPreference.id,
              ethnicityId: e_id
            });
          }),
          hairColorId?.map(async (h_id) => {
            await UserHairColor.create({
              userPreferenceId: userPreference.id,
              hairColorsId: h_id
            });
          }),
          educationId?.map(async (ed_id) => {
            await UserEducations.create({
              userPreferenceId: userPreference.id,
              educationsId: ed_id
            });
          }),
          childrenId?.map(async (c_id) => {
            await UserChildren.create({
              userPreferenceId: userPreference.id,
              childrensId: c_id
            });
          })
        );
      } else {
        await Promise.all(
          tagIds?.map(async (tagId) => {
            await UserTag.create({
              userPreferenceId: userPreference.id,
              tagId: tagId
            });
          }),
          occupationId?.map(async (o_id) => {
            await UserOccupation.create({
              userPreferenceId: userPreference.id,
              occupationId: o_id
            });
          }),
          relationshipStatusId?.map(async (r_id) => {
            await UserRelationship.create({
              userPreferenceId: userPreference.id,
              relationshipId: r_id
            });
          })
        );
      }
    }

    const user = await User.findOne({
      where: {
        id: req.user.id
      },
      // eager loading child relationship for api
      include: [
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"]
            },
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
    // await UserTag.create({
    //   userId: req.user.id,
    //   tagId: req.body.tagId
    // })
    let percentage = DEFAULT_PERCENTAGE;

    let profileValues = Object.assign({}, user.UserProfile?.dataValues);
    let preferenceValues = Object.assign({}, user.UserPreference?.dataValues);

    let notNullProfileValues = Object.keys(profileValues).filter(
      (x) => profileValues[x] !== null
    ).length;

    let notNullPreferenceValues = Object.keys(preferenceValues).filter(
      (x) => preferenceValues[x] !== null
    ).length;
    if (notNullProfileValues > 5) {
      percentage = percentage + PROFILE_PERCENTAGE;
    }
    if (notNullPreferenceValues > 6) {
      percentage = percentage + RELATIONSHIP_INTENT_PERCENTAGE;
    }
    let isImageUploaded = await UserPhoto.findOne({
      where: {
        userId: user.id
      }
    });
    console.log("isImageUploaded", isImageUploaded);
    if (isImageUploaded) {
      percentage = percentage + IMAGE_UPLOAD_PERCENTAGE; //this one is not working
    }

    await User.update(
      { profileCompletionPercentage: percentage },
      {
        where: {
          id: user.id
        }
      }
    );
    res.status(200).send({
      status: messages.SUCCESS,
      data: user,
      message: "User preference data fetched"
    });
  } catch (error) {
    console.log("usman");
    console.log(error);
    res.status(500).send({
      message: error.message
    });
  }
});

exports.searchFilter = catchAsync(async (req, res) => {
  let {
    occupationId,
    jobTitle,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    latitude,
    longitude,
    recentLatitude,
    recentLongitude,
    showFavouritedOne,
    someoneFavouritedMe,
    relationShipStatusId,
    tagIds,
    netWorth,
    bodyTypeId,
    hairColorId,
    educationId,
    childrenId
  } = req.body;

  let userMalePreferenceObject = {
    occupationId,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    bodyTypeId,
    hairColorId,
    educationId,
    childrenId,
    relationShipStatusId
  };
  let userFemalePreferenceObject = {
    occupationId,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    netWorth,
    relationShipStatusId
  };

  let userObject = {
    showFavouritedOne,
    someoneFavouritedMe
  };

  let userProfileObject = {
    jobTitle,
    latitude,
    longitude,
    recentLatitude,
    recentLongitude
  };
  try {
    if (req.user.gender == "male") {
      await UserPreference.update(userMalePreferenceObject, {
        where: {
          userId: req.user.id
        }
      });
    } else {
      await UserPreference.update(userFemalePreferenceObject, {
        where: {
          userId: req.user.id
        }
      });
    }

    await UserProfile.update(userProfileObject, {
      where: {
        userId: req.user.id
      }
    });

    await User.update(userObject, {
      where: {
        id: req.user.id
      }
    });

    if (req.user.UserPreference != null) {
      // const newTags = JSON.parse(tagIds)
      await UserTag.destroy({ where: { userPreferenceId: userPreference.id } });

      await Promise.all(
        tagIds.map(async (tagId) => {
          await UserTag.create({
            userPreferenceId: parseInt(userPreference.id),
            tagId: parseInt(tagId)
          });
        })
      );
    }

    const user = await User.findOne({
      where: {
        id: req.user.id
      },
      // eager loading child relationship for api
      include: [
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"]
            },
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
              model: RelationshipStatus,
              attributes: ["id", "name"]
            },
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
      status: messages.SUCCESS,
      data: user,
      message: "searched Filters"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message
    });
  }
});

exports.getMyPreference = catchAsync(async (req, res) => {
  try {
    const userPreference = await UserPreference.findOne({
      where: {
        userId: req.user.id
      },
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
    });

    if (userPreference) {
      res.status(200).send({
        status: messages.SUCCESS,
        data: userPreference,
        message: "Preference"
      });
    } else {
      res.status(200).send({
        status: messages.SUCCESS,
        data: null,
        message: "Preference not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message
    });
  }
});
