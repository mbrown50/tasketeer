const { TaskStatus } = require('../models');

const TaskStatusData = [
  {
    status: 'Complete',
  },
  {
    status: 'Upcoming',
  },
  {
    status: 'Cancelled',
  },
];

const seedStatus = () => TaskStatus.bulkCreate(TaskStatusData);

module.exports = seedStatus;
