const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserOccupation extends Model {
  //Functions comes here
}

UserOccupation.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    occupationId: {
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
    modelName: "UserOccupation"
  }
);

module.exports = UserOccupation;
