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
          //1
          firstname: 'Toto',
          lastname: 'Toto',
          email: 'toto@gmail.com',
          role: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          firstname: 'Paul',
          lastname: 'Mr Paul',
          email: 'Paul@gmail.com',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //3
          firstname: 'Cunegonde',
          lastname: 'Madame',
          email: 'cunegonde@gmail.com',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //4
          firstname: 'Jean',
          lastname: 'Bonbeur',
          email: 'JeanB@gmail.com',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //5
          firstname: 'Gaston',
          lastname: 'Lagaffe',
          email: 'Gaston@gmail.com',
          role: 'User',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //6
          firstname: 'Jacques Yves',
          lastname: 'Cousteau',
          email: 'Cousteau@gmail.com',
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
