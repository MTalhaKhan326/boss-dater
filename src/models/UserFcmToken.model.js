const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserFcmToken extends Model {}

UserFcmToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fcmToken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserFcmToken",
  }
);

module.exports = UserFcmToken;
