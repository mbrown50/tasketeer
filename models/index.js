// import models
const User = require('./User');
const Task = require('./Task');
const TaskStatus = require('./TaskStatus');

// One-to-Many

// Task belongsTo User
// A task belongs to a single user
Task.belongsTo(User, {
  foreignKey: 'user_id',
});

// Users have many Tasks
// A user can have many tasks
User.hasMany(Task, {
  foreignKey: 'user_id'
});


// One-to-Many

// Task belongsTo TaskStatus
// A task belongs to a single TaskStatus
Task.belongsTo(TaskStatus, {
  foreignKey: 'status_id',
});

// TaskStatuses have many Tasks
// A TaskStatus can have many tasks
TaskStatus.hasMany(Task, {
  foreignKey: 'status_id'
});


module.exports = {
  User,
  Task,
  TaskStatus,
};
