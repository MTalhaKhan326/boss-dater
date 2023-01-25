const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Ethnicity extends Model {
  //Functions comes here
}

Ethnicity.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
   
  },
  {
    sequelize,
    modelName: "Ethnicity",
  }
);

module.exports = Ethnicity;