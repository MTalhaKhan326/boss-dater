const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserEthnicity extends Model {
  //Functions comes here
}

UserEthnicity.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    ethnicityId: {
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
    modelName: "UserEthnicity"
  }
);

module.exports = UserEthnicity;
