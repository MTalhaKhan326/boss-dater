const {
  User,
  UserTag,
  Tag,
  UserProfile,
  UserPhoto,
  BodyType,
  Ethnicity,
  HairColor,
  Education,
  Children,
  Occupation,
  RelationshipStatus,
  UserPreference,
} = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const APIError = require("../utils/APIError.js");
const sequelize = require("sequelize");
const status = require("http-status");
const catchAsync = require("../utils/catchAsync");
const messages = require("../utils/constants");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../utils/fileUpload");
const UserRelationship = require("../models/UserRelationship.model");
const UserBodyTypes = require("../models/UserBodyType.model");
const UserEducations = require("../models/UserEducation.model");
const UserEthnicity = require("../models/UserEthnicity.model");
const UserHairColor = require("../models/UserHairColor.model");
const UserChildren = require("../models/UserChildren.model");
const UserOccupation = require("../models/UserOccupation.model");

exports.createProfile = catchAsync(async (req, res) => {
  let params = ({
    occupationId,
    career,
    skills,
    travelingSpot,
    aboutMe,
    lookingFor,
    height,
    relationshipStatusId,
    longitude,
    latitude,
  } = req.body);
  let male = {};
  let female = {};

  if (req.user.gender == "male") {
    male = {
      //men
      jobTitle,
      linkedin,
      businessProfile,
      netWorth,
    } = req.body;
  } else {
    female = {
      //women
      bodyTypeId,
      ethnicityId,
      hairColorId,
      educationId,
      childrenId,
    } = req.body;
  }
  const newParams = { ...params, ...male, ...female };
  console.log("newParamsnewParamsnewParamsnewParams",newParams)
  try {
    await UserProfile.update(newParams, {
      where: {
        userId: req.user.id,
      },
    });

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"],
            },
            {
              model: BodyType,
              attributes: ["id", "name"],
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"],
            },
            {
              model: HairColor,
              attributes: ["id", "name"],
            },
            {
              model: Education,
              attributes: ["id", "name"],
            },
            {
              model: Children,
              attributes: ["id", "name"],
            },
            {
              model: Occupation,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });
    // const token = jwt.sign({
    //   id: user.id,
    //   email: user.email
    // }, 'jsonsecrettoken', {
    //   expiresIn: '90d'
    // })

    res.status(200).send({
      status: "success",
      // token,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
  // res.status(200).json({
  //     status:"success",
  //     data:{
  //         user
  //     }
  // })
});

exports.uploadProfileImage = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error(messages.USER_NOT_FOUND);
    }
    if (req.files && req.files.profileImages) {
      //to wait for all the promises to be resolved then move forward
      if (req.files.profileImages.length) {
        await Promise.all(
          req.files.profileImages.map(async (file) => {
            const result = await uploadFile(file);
            await UserPhoto.create({
              userId: req.user.id,
              photo: result.Location,

            });
          })
        );
      } else {
        console.log("-------image type", req.body, req.files)
        const result = await uploadFile(req.files.profileImages);

        await UserPhoto.create({
          userId: req.user.id,
          photo: result.Location,
        });
      }
    } else {
      throw new Error(messages.IMAGE_NOT_SELECTED);
    }
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"],
            },
            {
              model: BodyType,
              attributes: ["id", "name"],
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"],
            },
            {
              model: HairColor,
              attributes: ["id", "name"],
            },
            {
              model: Education,
              attributes: ["id", "name"],
            },
            {
              model: Children,
              attributes: ["id", "name"],
            },
            {
              model: Occupation,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });
    res.status(200).send({
      status: "success",
      data: user,
    });
  } catch (err) {
    return next(new APIError(err, status.BAD_REQUEST));
  }
};


exports.deleteImage = catchAsync(async (req, res) => {
  // let params = ({
  //   email,
  // } = req.body);
  const imageId = req.params.imageId;
  try {
    await UserPhoto.destroy(
      {
        where: {
          id: imageId,
        },
      }
    );

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    return res.status(200).send({
      status:'success',
      message: "successfully deleted the image",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Unable to delete photo.",
    });
  }
});


// update profile api to update email//
exports.updateEmail = catchAsync(async (req, res) => {
  // let params = ({
  //   email,
  // } = req.body);
  let email = req.body.email;

  try {
    await User.update(
      { email },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    res.status(200).send({
      message: "successfully updated the email",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// update profile api to update phone number//
exports.updateNumber = catchAsync(async (req, res) => {
  let number = req.body.number;

  try {
    await User.update(
      { number },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    console.log("talha")

    res.status(200).send({
      status: "success",
      message: "successfully updated the number",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

/// update Password api
exports.updatePassword = catchAsync(async (req, res) => {
  try {
    //
    let password = req.body.password;

    var passwordIsValid = bcrypt.compareSync(
      req.body.previousPassword,
      req.user.password
    );

    if (passwordIsValid) {
      await User.update(
        { password: bcrypt.hashSync(password, 8) },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      const user = await User.findOne({
        where: {
          id: req.user.id,
        },
      });

      res.status(200).send({
        status: "success",
        message: "successfully updated the password",
        data: user,
      });
    } else {
      throw new Error("old password is incorrect");
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// edit profile api
exports.editProfile = catchAsync(async (req, res) => {
  let params = {
    // name,
    age,
    location,
    aboutMe,
    photos,
    description,
    lookingFor,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    netWorth,
    tagIds,
    bodyTypeId,
    ethnicityId,
    hairColorId,
    educationId,
    childrenId,
    relationshipStatusId,
  } = req.body;

  params.name = req.body.name;
  console.log('**********************************')
  console.log(params.name)
  console.log(req.user.id)
  console.log('**********************************') 

  console.log('userpreferenceUpdtedresult',params)

  try {
    await User.update({name: req.body.name}, {
      where: {
        id: req.user.id
      }
    })
    await UserProfile.update(params, {
      where: {
        userId: req.user.id,
      },
    });
   const userpreferenceUpdtedresult = await UserPreference.update(params, {
      where: {
        userId: req.user.id,
      },
    });

    const userPreference = await UserPreference.findOne({
      where: {
        userId: req.user.id,
      },
    });

    if (userPreference != null) {
      console.log('userPreference--->',userPreference)
      await UserTag.destroy({ where: { userPreferenceId: userPreference.id }})

      await Promise.all(
        tagIds.map(async (tagId) => {
          await UserTag.create({
            userPreferenceId: userPreference.id,
            tagId: tagId,
          });
        })
      );
    }


    if(Array.isArray(req.body.photos) && req.body.photos.length > 0) {
      req.body.photos.forEach((photo, index) => {
        UserPhoto.create({
          photo: photo,
          userId: req.user.id
        })
      })
    }

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: UserProfile,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"],
            },
            {
              model: BodyType,
              attributes: ["id", "name"],
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"],
            },
            {
              model: HairColor,
              attributes: ["id", "name"],
            },
            {
              model: Education,
              attributes: ["id", "name"],
            },
            {
              model: Children,
              attributes: ["id", "name"],
            },
            {
              model: Occupation,
              attributes: ["id", "name"],
            },
            
          ],
        },
      ],
    });
    console.log('useruser', JSON.stringify(user))

    

    res.status(200).send({
      status: "success",
      message:"successfully edited and updated the profile",
      // token,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
0  }
});

exports.updateLocation = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body;
    await UserProfile.update(
      { latitude, longitude },
      {
        where: {
          userId: req.user.id,
        },
      }
    );

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "successfully updated the location",
      data: user,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

exports.updateRecentLocation = async (req, res, next) => {
  try {
    let { recentLatitude, recentLongitude } = req.body;
    await UserProfile.update(
      { recentLatitude, recentLongitude },
      {
        where: {
          userId: req.user.id,
        },
      }
    );

    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "successfully updated the recent sign in location",
      data: user,
    });
  } catch (err) {
    return next(new APIError(err.message, status.BAD_REQUEST));
  }
};

exports.uploadSingleImage = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error(messages.USER_NOT_FOUND);
    }
  } catch (error) {
    return next(new APIError(error.message, status.BAD_REQUEST));
  }
};


exports.userData = async (req, res, next) => {
  const user = await User.findOne({
     where: { id: req.user.id },
     include: [
      "UserPhotos",
      {
        model: UserProfile,
        include: [
          {
            model: RelationshipStatus,
            attributes: ["id", "name"],
          },
          {
            model: BodyType,
            attributes: ["id", "name"],
          },
          {
            model: Ethnicity,
            attributes: ["id", "name"],
          },
          {
            model: HairColor,
            attributes: ["id", "name"],
          },
          {
            model: Education,
            attributes: ["id", "name"],
          },
          {
            model: Children,
            attributes: ["id", "name"],
          },
          {
            model: Occupation,
            attributes: ["id", "name"],
          },
        ],
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
    ],
    });
    res.status(200).send({
      status: "success",
      data:user,
    });
}