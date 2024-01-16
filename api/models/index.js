// import { readdirSync } from 'fs';
// import { basename as _basename, join } from 'path';
import { Sequelize } from 'sequelize';

// // import { env as _env } from 'process';
// import * as dotenv from 'dotenv';
// dotenv.config();
// const basename = _basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// // const config = require(__dirname + '/../config/config.js')[env];
// import { development } from '../config/config.js';
// const config = __dirname + development;
// const db = {};

// console.log(development);

// const connectString = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;
// const sequelize = new Sequelize(`${connectString}?sslmode=no-verify`, config);
// const sequelize = new Sequelize(connectString, config);
let connection = {
  host: 'localhost',
  port: 5432, // Adjust to the correct PostgreSQL port
  user: 'postgres',
  password: 'password',
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

// readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(join(__dirname, file))(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
export default sequelize;
