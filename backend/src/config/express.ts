import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import db from './db';
import config from './config';
import { apiErrorHandler } from '../middlewares/apiErrorHandler';
import authCheck from '../middlewares/authCheck';
import router from '../routes/index.router';

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const sessionStore = new SequelizeStore({
  db,
  tableName: 'session',
});

app.use(express.json());
app.use(bodyParser.json());

// app.use(
//   session({
//     name: 'sid',
//     proxy: config.env === 'production',
//     cookie: {
//       maxAge: config.session.timeout,
//       httpOnly: true,
//       sameSite: true,
//       secure: config.env === 'production',
//     },
//     secret: config.session.secret,
//     store: sessionStore,
//     saveUninitialized: false,
//     resave: false,
//   }),
// );

// app.use(authCheck);

app.get('/test', (req, res, next) => {
  res.status(200).json({message: 'All good'})
})

app.use('/api', router);
app.use(apiErrorHandler);

export default app;
