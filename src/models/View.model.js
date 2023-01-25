const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class View extends Model {
  //Functions comes here
}

View.init(
  {},
  {
    sequelize,
    modelName: "View",
  }
);

module.exports = View;
