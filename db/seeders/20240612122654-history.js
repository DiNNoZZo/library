'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('histories', [
      {
        user_id: 1,
        action: 'borrowed',
        book_id: 1,
        timestamp: new Date('2024-01-01T10:00:00Z'),
      },
      {
        user_id: 1,
        action: 'returned',
        book_id: 1,
        timestamp: new Date('2024-01-15T10:00:00Z'),
      },
      {
        user_id: 1,
        action: 'borrowed',
        book_id: 2,
        timestamp: new Date('2024-02-01T10:00:00Z'),
      },
      // {
      //   user_id: 3,
      //   action: 'borrowed',
      //   book_id: 3,
      //   timestamp: new Date('2024-03-01T10:00:00Z'),
      // },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('histories', null, {});
  }
};
