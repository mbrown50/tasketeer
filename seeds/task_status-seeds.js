const { TaskStatus } = require('../models');

const TaskStatusData = [
  {
    name: 'Complete',
  
  },
  {
    name: 'Upcoming',
  
  },
  {
    name: 'Cancelled',
  
  },
];

const seedStatus = () => TaskStatus.bulkCreate(TaskStatusData);

module.exports = seedStatus;
