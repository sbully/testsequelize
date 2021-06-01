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
          password:
            '$2a$10$vgp6A/t0UYP3TU54Ci.9k.nmtIfWuEzXgRR7Rq0ubzRHufxNgqhjG', //password = passwordtoto
          role: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          firstname: 'Paul',
          lastname: 'Mr Paul',
          email: 'Paul@gmail.com',
          password:
            '$2a$10$uumTh7/ApN.uW2s9MzoWR.2oSEJF.ZQBTxFNIYjNLyOTj5vFUQ4F2', // password = password
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //3
          firstname: 'Cunegonde',
          lastname: 'Madame',
          email: 'cunegonde@gmail.com',
          password:
            '$2a$10$uumTh7/ApN.uW2s9MzoWR.2oSEJF.ZQBTxFNIYjNLyOTj5vFUQ4F2',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //4
          firstname: 'Jean',
          lastname: 'Bonbeur',
          email: 'JeanB@gmail.com',
          password:
            '$2a$10$uumTh7/ApN.uW2s9MzoWR.2oSEJF.ZQBTxFNIYjNLyOTj5vFUQ4F2',
          role: 'Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //5
          firstname: 'Gaston',
          lastname: 'Lagaffe',
          email: 'Gaston@gmail.com',
          password:
            '$2a$10$uumTh7/ApN.uW2s9MzoWR.2oSEJF.ZQBTxFNIYjNLyOTj5vFUQ4F2',
          role: 'User',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //6
          firstname: 'Jacques Yves',
          lastname: 'Cousteau',
          email: 'Cousteau@gmail.com',
          password:
            '$2a$10$uumTh7/ApN.uW2s9MzoWR.2oSEJF.ZQBTxFNIYjNLyOTj5vFUQ4F2',
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
