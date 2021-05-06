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
          role: 'Member',
        },
        {
          firstname: 'Paul',
          lastname: 'Mr Paul',
          email: 'Paul@gmail.com',
          role: 'Member',
        },
        {
          firstname: 'Cunegonde',
          lastname: 'Madame',
          email: 'cunegonde@gmail.com',
          role: 'Member',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('LabMembers', null, {});
  },
};
