'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('heslo', 10);
    await queryInterface.bulkInsert('users', [{
      first_name: 'student',
      last_name: 'first',
      email: 'student@test.com',
      library_id: 1,
      password: hashedPassword,
      role: 'student',
      registered_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
