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
          password: 'passwordTT',
          role: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          firstname: 'Paul',
          lastname: 'Mr Paul',
          email: 'Paul@gmail.com',
          password: 'passwordPM',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //3
          firstname: 'Cunegonde',
          lastname: 'Madame',
          email: 'cunegonde@gmail.com',
          password: 'passwordCM',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //4
          firstname: 'Jean',
          lastname: 'Bonbeur',
          email: 'JeanB@gmail.com',
          password: 'passwordJB',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //5
          firstname: 'Gaston',
          lastname: 'Lagaffe',
          email: 'Gaston@gmail.com',
          password: 'passwordGL',
          role: 'User',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //6
          firstname: 'Jacques Yves',
          lastname: 'Cousteau',
          email: 'Cousteau@gmail.com',
          password: 'passwordJYC',
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
