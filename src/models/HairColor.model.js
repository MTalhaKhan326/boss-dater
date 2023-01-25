const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class HairColor extends Model {
  //Functions comes here
}

HairColor.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    modelName: "HairColor",
  }
);

module.exports = HairColor;