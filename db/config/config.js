// require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'library',
    host: 'db',
    dialect: 'postgres',
  },
  // test: {
  //   username: 'root',
  //   password: 'root',
  //   database: 'library-test',
  //   host: 'localhost',
  //   dialect: 'postgres',
  // },
  // production: {
  //   host: process.env.DB_HOST,
  //   database: process.env.DB_NAME,
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   dialect: 'postgres',
  // },
};
