const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserTag extends Model {
  //Functions comes here
}

UserTag.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "Tag",
      //   key: "id",
      // },
    },

  },
  {
    sequelize,
    modelName: "UserTag",
  }
);

module.exports = UserTag;