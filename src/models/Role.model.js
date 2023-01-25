const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Role extends Model {
  //Functions comes here
}

Role.init(
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Role",
  }
);

module.exports = Role;
