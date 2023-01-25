const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class UserHistory extends Model {
  //Functions comes here
}

UserHistory.init(
  {
    actorUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    sequelize,
    modelName: "UserHistory",
  }
);

module.exports = UserHistory;