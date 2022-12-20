const Sequelize = require('sequelize');
require('dotenv').config();

const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, DATABASE_URL} = process.env;

const sequelize = new Sequelize(
    // "postgres://vyfkwzvwxlveon:9f2c11006cda3be5ebfff23460a453ae57931070caf303b2f640e7d1a027cb79@ec2-23-20-224-166.compute-1.amazonaws.com:5432/d5qoq7u4j750rg",
    DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host:DB_HOST, 
    port: DB_PORT,
    dialectOptions: {
        ssl: false
    }
}
)

module.exports = sequelize;
