const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Children extends Model {
  //Functions comes here
}

Children.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    modelName: "Children",
  }
);

module.exports = Children;