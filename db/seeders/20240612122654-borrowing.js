'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('borrowings', [
      {
        user_id: 1,
        book_id: 1,
        borrowed_at: new Date('2024-01-01T10:00:00Z'),
        returned_at: new Date('2024-01-15T10:00:00Z'),
      },
      {
        user_id: 1,
        book_id: 2,
        borrowed_at: new Date('2024-02-01T10:00:00Z'),
        returned_at: null, // Ešte nevrátené
      },
      // {
      //   user_id: 3,
      //   book_id: 3,
      //   borrowed_at: new Date('2024-03-01T10:00:00Z'),
      //   returned_at: null, // Ešte nevrátené
      // }
    ], {});

    await queryInterface.bulkUpdate('books', 
      { quantity: Sequelize.literal('quantity - 1'), updated_at: new Date()},
      { id: [1, 2] }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('borrowings', null, {});

    await queryInterface.bulkUpdate('books', 
      { quantity: Sequelize.literal('quantity + 1'), updated_at: new Date() },
      { id: [1, 2] }
    );
  }
};
