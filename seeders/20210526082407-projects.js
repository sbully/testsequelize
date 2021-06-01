'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          name: 'DailyLab',
          description: 'projet DailyLab',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ICM',
          description: 'projet ICM',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'LondonTower',
          description: 'projet LondonTower',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project4',
          description: 'projet 4 parce que.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SpaceX',
          description: 'Space X API',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
