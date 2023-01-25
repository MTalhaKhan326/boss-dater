const { Model, DataTypes } = require('sequelize')
const sequelize = require("../config/db.config");

class EmailVerificationToken extends Model {}

EmailVerificationToken.init(
    {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiresIn: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'EmailVerificationToken',
    }
)

module.exports = EmailVerificationToken
