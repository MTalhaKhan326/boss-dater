const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class RelationshipStatus extends Model {
  //Functions comes here
}

RelationshipStatus.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "RelationshipStatus",
  }
);

module.exports = RelationshipStatus;