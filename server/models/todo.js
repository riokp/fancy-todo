'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User)
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        isAfter: (new Date()).toISOString()
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    }
    }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};