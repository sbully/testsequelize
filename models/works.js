'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Works extends Model {
    static associate(models) {}
  }
  Works.init(
    {
      role: {
        type: DataTypes.ENUM(
          'ProductOwner',
          'Developer',
          'ScrumMaster',
          'Tester',
          'TechLead',
          'Designer',
          'ProxyPO',
          'DevOps'
        ),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Works',
    }
  );
  return Works;
};
