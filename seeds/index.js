const seedStatuses = require('./task_status-seeds');
const seedUsers = require('./user-seeds');
const seedTasks = require('./task-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedStatuses();
  console.log('\n----- STATUSES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTasks();
  console.log('\n----- TASKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
