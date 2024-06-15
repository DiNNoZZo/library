'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash('heslo', 10);
    await queryInterface.bulkInsert('users', [{
      username: 'student1',
      password: 'heslo',
      role: 'student',
      registered_at: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
