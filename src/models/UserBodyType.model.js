const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserBodyTypes extends Model {
  //Functions comes here
}

UserBodyTypes.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    bodyTypesId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "Tag",
      //   key: "id",
      // },
    }
  },
  {
    sequelize,
    modelName: "UserBodyTypes"
  }
);

module.exports = UserBodyTypes;
