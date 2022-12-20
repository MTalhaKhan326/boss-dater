const UserPreference = require("../models/UserPreference.model");
const Sequelize = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const status = require("http-status");
const {
  userPhoto,
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
  RELATIONSHIP_INTENT_PERCENTAGE,
} = require("../utils/constants");
exports.create = catchAsync(async (req, res) => {
  let params = {
    occupationId,
    description,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    relationShipStatusId,
    tagIds,
    deviceToken,
  } = req.body;
  let male = {};
  let female = {};

  if (req.user.gender == "male") {
    male = {
      //women
      bodyTypeId,
      ethnicityId,
      hairColorId,
      educationId,
      childrenId,
    } = req.body;
  } else {
    female = {
      //men
      jobTitle,
      linkedin,
      netWorth,
    } = req.body;
  }
  const newParams = { ...params, ...male, ...female };
  
  // await UserPreference.update({deviceToken},{
  //   where: {
  //     userId: req.user.id,
  //   },
  // });

  try {
    await UserPreference.update(newParams, {
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
      // const newTags = JSON.parse(tagIds)
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
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      // eager loading child relationship for api
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
            {
              model: UserTag,
              include: [
                {
                  model: Tag,
                  attributes: ["id", "name"],
                },
              ],
            },
          ],
        },
      ],
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
        userId: user.id,
      },
    });
    console.log("isImageUploaded",isImageUploaded)
    if (isImageUploaded) {
      percentage = percentage + IMAGE_UPLOAD_PERCENTAGE; //this one is not working
    }

    await User.update(
      { profileCompletionPercentage: percentage },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).send({
      status: messages.SUCCESS,
      data: user,
      message: "User preference data fetched",
    });
  } catch (error) {
    console.log('usman');
    console.log(error);
    res.status(500).send({
      message: error.message,
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
    childrenId,
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
  }
  let userFemalePreferenceObject = {
    occupationId,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    netWorth,
    relationShipStatusId
  }

  let userObject = {
    showFavouritedOne,
    someoneFavouritedMe,
  }

  let userProfileObject = {
    jobTitle,
    latitude,
    longitude,
    recentLatitude,
    recentLongitude,
  }
  try {
    if (req.user.gender == "male") {

    await UserPreference.update(userMalePreferenceObject, {
      where: {
        userId: req.user.id,
      },
    });
  }  else {
    await UserPreference.update(userFemalePreferenceObject, {
      where: {
        userId: req.user.id,
      },
    });
  }
    
    await UserProfile.update(userProfileObject, {
      where: {
        userId: req.user.id,
      },
    });

    await User.update(userObject, {
      where: {
        id: req.user.id,
      },
    });
    

    if (req.user.UserPreference != null) {
      // const newTags = JSON.parse(tagIds)
      await UserTag.destroy({ where: { userPreferenceId: userPreference.id }})

      await Promise.all(
        tagIds.map(async (tagId) => {
          await UserTag.create({
            userPreferenceId: parseInt(userPreference.id),
            tagId: parseInt(tagId),
          });
        })
      );
    }
    
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      // eager loading child relationship for api
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
            {
              model: UserTag,
              include: [
                {
                  model: Tag,
                  attributes: ["id", "name"],
                },
              ],
            },
          ],
        },
      ],
    });
   
    res.status(200).send({
      status: messages.SUCCESS,
      data: user,
      message: "searched Filters",
    });
  } catch (error) {
  
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
});


exports.getMyPreference = catchAsync(async (req, res) => {

try{
  const userPreference = await UserPreference.findOne({
    where: {
      userId: req.user.id,
    },

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
      {
        model: UserTag,
        include: [
          {
            model: Tag,
            attributes: ["id", "name"],
          },
        ],
      },
    ],
  });
   
  if(userPreference){
      res.status(200).send({
        status: messages.SUCCESS,
        data: userPreference,
        message: "Preference",
      });
      }else{
        res.status(200).send({
          status: messages.SUCCESS,
          data: null,
          message: "Preference not found",
        });
  }
} catch (error) {
  
  console.log(error);
  res.status(500).send({
    message: error.message,
  });
}
})

