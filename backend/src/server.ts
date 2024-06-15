import app from './config/express';
import config from './config/config';
import db from './config/db';

const { port } = config;

// Test db connection
async function testDbConnection() {
  try {
    await db.authenticate();
    console.log('Db connection working ok.');
  } catch (err) {
    console.log('Unable to connect to the database:', err);
    process.exit(1);
  }
}

const start = async () => {
  await testDbConnection();
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

start();
