const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserPhoto extends Model {
  //Functions comes here
}

UserPhoto.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePhoto: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "UserPhoto",
  }
);

module.exports = UserPhoto;
