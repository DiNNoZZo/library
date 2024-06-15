'use strict';

const Sequelize = require('sequelize');
import { initModels } from '../models/init_models';
import config from './config';

const {db} = config;

const sequelize = new Sequelize(db.name, db.username, db.password, db.options);

export const models = initModels(sequelize);
export default sequelize;