'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.

     */
    await queryInterface.bulkInsert(
      'LabMembers',
      [
        {
          firstname: 'Toto',
          lastname: 'De Toto',
          email: 'toto@gmail.com',
          role: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Paul',
          lastname: 'Mr Paul',
          email: 'Paul@gmail.com',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Cunegonde',
          lastname: 'Madame',
          email: 'cunegonde@gmail.com',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LabMembers', null, {});
  },
};
