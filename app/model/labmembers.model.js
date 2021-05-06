const { Sequelize } = require('sequelize');
const db = require('../services/dbconnectionservice');

// definir un model representant la table deja créé dans phpmyadmin
/* const LabMembers = db.define(
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
); */

/**
 * definition de la table labmembers
 * creation avec .sync() de la table
 * droop table si elle existe déja avec ({force:true})
 */
const LabMembers = db.define('labmembers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: Sequelize.ENUM,
    values: ['Admin', 'Member', 'User'],
    allowNull: false,
    defaultValue: 'User',
  },
});
LabMembers.sync({ force: true });
module.exports = LabMembers;
