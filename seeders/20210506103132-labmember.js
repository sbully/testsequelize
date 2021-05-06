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
          createdAt: new Date('YYYY-MM-DD'),
        },
        {
          firstname: 'Paul',
          lastname: 'Mr Paul',
          email: 'Paul@gmail.com',
          role: 'Member',
          createdAt: new Date('YYYY-MM-DD'),
        },
        {
          firstname: 'Cunegonde',
          lastname: 'Madame',
          email: 'cunegonde@gmail.com',
          role: 'Member',
          createdAt: new Date('YYYY-MM-DD').now,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LabMembers', null, {});
  },
};
