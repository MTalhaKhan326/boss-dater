const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserChildren extends Model {
  //Functions comes here
}

UserChildren.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    childrensId: {
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
    modelName: "UserChildren"
  }
);

module.exports = UserChildren;
