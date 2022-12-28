const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Faq extends Model {
  //Functions comes here
}

Faq.init(
  {
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Faq",
    timestamps:false
  }
);

module.exports = Faq;
