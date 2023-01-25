const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Block extends Model {
  //Functions comes here
}

Block.init(
  {},
  {
    sequelize,
    modelName: "Block",
  }
);

module.exports = Block;
