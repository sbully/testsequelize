'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LabMembers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LabMembers.init(
    {
      id: DataTypes.INTEGER,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.ENUM,
    },
    {
      sequelize,
      modelName: 'LabMembers',
    }
  );
  return LabMembers;
};
