const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Report extends Model {
  //Functions comes here
}

Report.init(
  {
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Report",
  }
);

module.exports = Report;
