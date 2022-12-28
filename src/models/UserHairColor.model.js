const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserHairColor extends Model {
  //Functions comes here
}

UserHairColor.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    hairColorsId: {
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
    modelName: "UserHairColor"
  }
);

module.exports = UserHairColor;
