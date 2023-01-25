const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db.config");


class UserStatus extends Model {  
}

UserStatus.init(
  {
    
    status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    sequelize,
    paranoid: true,
    modelName: "UserStatus",
  }
);

module.exports = UserStatus;
