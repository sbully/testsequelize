'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.LabMembers, {
        through: 'Works',
        foreignKey: 'projectId',
        otherKey: 'labMemberId',
        as: 'labMembers',
      });
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
