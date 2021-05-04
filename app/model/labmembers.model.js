const { Sequelize } = require('sequelize');
const db = require('../services/dbconnectionservice');

const LabMembers = db.define(
  'labmembers',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    role: {
      type: Sequelize.ENUM,
      values: ['Admin', 'Member', 'User'],
    },
  },
  { timestamps: false }
);

module.exports = LabMembers;
