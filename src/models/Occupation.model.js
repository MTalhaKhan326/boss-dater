const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const jwt = require('jsonwebtoken');

class Occupation extends Model {}

Occupation.init(
  {
    name:{
      type:DataTypes.TEXT,
      allowNull: true,
    },
    gender:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    modelName: "Occupation",
  }
);

module.exports = Occupation;
