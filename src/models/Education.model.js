const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Education extends Model {
  //Functions comes here
}

Education.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },

  {
    sequelize,
    modelName: "Education",
  }
);

module.exports = Education;