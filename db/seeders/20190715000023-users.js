'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users',
   [
     {
      firstName: 'John Doe',
      email: 'test@medium.com',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      firstName: 'John Travolta',
      email: 'test2@medium.com',
      createdAt: new Date(),
      updatedAt: new Date(),
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
