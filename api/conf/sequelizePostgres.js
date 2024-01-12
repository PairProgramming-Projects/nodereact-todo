import { Sequelize } from 'sequelize';
import log from './log.js';

let connection = {
  host: 'localhost',
  port: 5432, // Adjust to the correct PostgreSQL port
  user: 'postgres',
  password: process.env.DB_PW,
  database: 'postgres',
};

const connectString = `postgres://${connection.user}:${connection.password}@${connection.host}:${connection.port}/${connection.database}`;

const sequelize = new Sequelize(connectString, {
  dialect: 'postgres',
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

try {
  await sequelize.authenticate();
  log.info(`Connection to Postgres has been established successfully.`);

} catch (error) {
  log.error('Unable to connect to the database:', error);
}
export default sequelize;
