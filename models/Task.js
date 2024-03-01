const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Task extends Model { }

// had to use require
// date-fns 
const { format } = require("date-fns")

Task.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
    },
    dateFormat: {
      type: DataTypes.VIRTUAL,
      get() {
        return format(`${this.datetime}`, "MM/DD/YYYY"); 
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    },
    timeFormat: {
      type: DataTypes.VIRTUAL,
      get() {
        return format(`${this.datetime}`, "HH:mm"); 
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    }, 
    location: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TaskStatus',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Task',
  }
);

module.exports = Task;
