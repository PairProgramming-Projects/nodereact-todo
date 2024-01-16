// import { Model } from 'sequelize';

import { default as sequelizePostgres } from '../models/index.js'
import { DataTypes } from 'sequelize'

const User = sequelizePostgres.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {
        schema: 'node_react_schema',
        timestamps: false, // Disable timestamps for this model
        underscored: true
    }
)

User.hasMany(models.Todo, { foreignKey: 'user_id' });

export default User;

// export default (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.hasMany(models.Todo, { foreignKey: 'user_id' });
//     }
//   }
//   User.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//     underscored: true,
//   });
//   return User;
// };