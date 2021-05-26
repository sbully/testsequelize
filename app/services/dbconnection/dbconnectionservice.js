const { Sequelize } = require('sequelize');

const db = new Sequelize('sequelizetest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
