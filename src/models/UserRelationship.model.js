const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserRelationship extends Model {
  //Functions comes here
}

UserRelationship.init(
  {
    userPreferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // references: {
      //   model: "UserPreference",
      //   key: "id",
      // },
    },
    relationshipId: {
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
    modelName: "UserRelationship"
  }
);

module.exports = UserRelationship;
