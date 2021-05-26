'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Works',
      [
        {
          projectId: 1,
          labMemberId: 1,
          role: 'ProductOwner',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          projectId: 2,
          labMemberId: 2,
          role: 'Developer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          projectId: 4,
          labMemberId: 1,
          role: 'TechLead',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          projectId: 4,
          labMemberId: 2,
          role: 'Designer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Works', null, {});
  },
};
