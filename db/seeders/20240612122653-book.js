'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books', [
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        isbn: '9780547928227',
        library_id: 1,
        quantity: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        isbn: '9780261103573',
        library_id: 1,
        quantity: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Two Towers',
        author: 'J.R.R. Tolkien',
        isbn: '9780261102361',
        library_id: 1,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Return of the King',
        author: 'J.R.R. Tolkien',
        isbn: '9780261102378',
        library_id: 1,
        quantity: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Silmarillion',
        author: 'J.R.R. Tolkien',
        isbn: '9780618391110',
        library_id: 1,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Unfinished Tales',
        author: 'J.R.R. Tolkien',
        isbn: '9780261103627',
        library_id: 1,
        quantity: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Children of Húrin',
        author: 'J.R.R. Tolkien',
        isbn: '9780618894642',
        library_id: 1,
        quantity: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Beren and Lúthien',
        author: 'J.R.R. Tolkien',
        isbn: '9781328791825',
        library_id: 1,
        quantity: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Fall of Gondolin',
        author: 'J.R.R. Tolkien',
        isbn: '9781328613042',
        library_id: 1,
        quantity: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The History of Middle-earth',
        author: 'J.R.R. Tolkien',
        isbn: '9780007105074',
        library_id: 1,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
