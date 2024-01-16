// import { Model } from 'sequelize';

import { default as sequelizePostgres } from '../models/index.js'
import { DataTypes } from 'sequelize'

const Todo = sequelizePostgres.define(
    'todo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          progress: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          date: {
            type: DataTypes.STRING,
          },
    },
    {
          schema: 'node_react_schema',
          timestamps: false, // Disable timestamps for this model
          underscored: true
    }
)

// export default (sequelize, DataTypes) => {
//   class Todo extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.User, { foreignKey: 'user_id' });
//     }
//   }
//   Todo.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//     user_id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     progress: DataTypes.STRING,
//     date: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Todo',
//     underscored: true
//   });
//   return Todo;
// };

Todo.belongsTo(models.User, { foreignKey: 'user_id' });

export default Todo;