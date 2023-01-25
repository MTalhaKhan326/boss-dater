const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class BodyType extends Model {
  //Functions comes here
}

BodyType.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
   
  },
  {
    sequelize,
    modelName: "BodyType",
  }
);

module.exports = BodyType;