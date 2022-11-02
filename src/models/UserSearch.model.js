const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const HairColor = require("./HairColor.model");

class UserSearch extends Model {
  //Functions comes here
}

UserSearch.init(
  {
    searchName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    gps: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    otherLocation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    locationByCityName: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    occupations: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },

    jobTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    minDistance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },

    maxDistance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 100
    },

    minNetWorth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },

    maxNetWorth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 100000
    },
    currenc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },

    minAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 18
    },

    maxAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 65
    },

    minHeight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },

    maxHeight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 500
    },

    viewedMe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    unViewed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    favorited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    favoritedMe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    bodyTypesIds: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },

    heirTypeIds: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },

    relationshipStatusIds: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },

    educationIds: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },


    childrenIds: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },

    showMemberSeekengIds: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },

    doNotShowMemberSeekings: {
      type:  DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
    
  },
  {
    sequelize,
    modelName: "UserSearch",
  }
);

module.exports = UserSearch;


// {
//   "gps":true,
//   "otherLocation":true,
//   "locationByCityName":true 
//   "occupations": [1,2],
//   "jobTitle": "Software Egnineer", 
//   "minDistance":10,
//   "maxDistance":1001,
//   "minHeight": 100,
//   "maxHeight": 300,
//   "minNetWorth": 100
//   "maxNetWorth":10000000
//   "minAge": 25,
//   "maxAge": 60,
//   "childrenIds": [1,2],
//   "educationIds":[3,4],
//   "HairColor": [5,6],
//   "bodyTypesIds": [3,6],
  
//   "showMemberSeekengIds":[1],
//   "doNotShowMemberSeekings":[3]
// }