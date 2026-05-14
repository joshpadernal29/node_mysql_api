// Load environment variables from .env
import dotenv from 'dotenv';
dotenv.config();

import config from '../config.json';
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import accountModel from '../accounts/accounts.model';
import refreshTokenModel from '../accounts/refresh-token.model';

const db: any = {};
export default db;

initialize();

async function initialize() {
  // -----------------------------
  // ENV OVERRIDES CONFIG (for prod)
  // -----------------------------
  const host = process.env.DB_HOST || config.database.host;
  const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : config.database.port;
  const user = process.env.DB_USER || config.database.user;
  const password = process.env.DB_PASS || config.database.password;
  const database = process.env.DB_NAME || config.database.database;

  // -----------------------------
  // LOCAL DEV: create DB if it doesn't exist
  // -----------------------------
  // Comment out this block for production
  /*
  if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  }
  */

  // -----------------------------
  // Connect with Sequelize
  // -----------------------------
  const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'mysql',
    logging: false, // optional: turn off logging
  });

  // Init models
  db.Account = accountModel(sequelize);
  db.RefreshToken = refreshTokenModel(sequelize);

  // Define relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
  db.RefreshToken.belongsTo(db.Account);

  // Sync models with database
  await sequelize.sync();
}