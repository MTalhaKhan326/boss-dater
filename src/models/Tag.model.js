const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Tag extends Model {
  //Functions comes here
}

Tag.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    modelName: "Tag",
  }
);

module.exports = Tag;