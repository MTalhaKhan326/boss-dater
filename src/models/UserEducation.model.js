const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserEducations extends Model {
  //Functions comes here
}

UserEducations.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    educationsId: {
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
    modelName: "UserEducations"
  }
);

module.exports = UserEducations;
