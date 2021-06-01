'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LabMembers extends Model {
    static associate(models) {
      LabMembers.belongsToMany(models.Project, {
        through: 'Works',
        foreignKey: 'labMemberId',
        otherKey: 'projectId',
        as: 'projects',
      });
    }
  }
  LabMembers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        allowNul: false,
        type: DataTypes.ENUM('Admin', 'Member', 'User'),
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'LabMembers',
    }
  );
  return LabMembers;
};
