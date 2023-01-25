const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Like extends Model {
  //Functions comes here
}

Like.init(
  {},
  {
    sequelize,
    modelName: "Like",
  }
);

module.exports = Like;
