'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Daniel Cavalcanti',
      email: 'danielcavalcanti8000@gmail.com',
      password: 'daniel1234',
      balance: 2000,
      created: '2022-11-18T00:00:00',
     }, {
      name: 'Isadora Maiara',
      email: 'isadoramaiara@gmail.com',
      password: 'isadora123',
      balance: 1500,
      created: '2022-11-18T00:00:00',
     }, {
      name: 'Omar Cavalcanti',
      email: 'omarcavalcanti@gmail.com',
      password: 'omar1234',
      balance: 5000,
      created: '2022-11-18T00:00:00',
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
