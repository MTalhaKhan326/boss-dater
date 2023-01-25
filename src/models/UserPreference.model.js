const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserPreference extends Model {
  //Functions comes here
}

UserPreference.init(
  {
    lookingFor: {
      type: DataTypes.TEXT,
      
    },
    minAge: {
      type: DataTypes.INTEGER,
      
    },
    maxAge: {
      type: DataTypes.INTEGER,
      
    },
    minHeight: {
      type: DataTypes.STRING,
      
    },
    maxHeight: {
      type: DataTypes.STRING,
      
    },
    interestedIn: {
      type: DataTypes.STRING,
    },
    //women preference
    netWorth: {
        type: DataTypes.STRING,
        
    },
  },
  {
    sequelize,
    modelName: "UserPreference",
  }
);

module.exports = UserPreference;