const { Task } = require('../models');

const TaskData = [
    {
        task: "hello",
        datetime: new Date("December 17, 1995 03:24:00"),
        location: "MN",
        notes: 'Hello',
        status_id: 1,
        user_id: 1, 
    },
    {
        task: "hello",
        datetime: new Date('January 17, 2024 03:24:00'),
        location: "WI",
        notes: 'World',
        status_id: 3,
        user_id: 2,
    },
    {
        task: "Coding",
        datetime: new Date('February 17, 2020 03:24:00'),
        location: "CA",
        notes: 'Yo',
        status_id: 3,
        user_id: 3,
    },
    {
        task: "Fun",
        datetime: new Date('December 30, 2021 03:24:00'),
        location: "MI",
        notes: 'note',
        status_id: 2,
        user_id: 4,
    },
    {
        task: "Run",
        datetime: new Date('March 30, 2023 07:42:00'),
        location: "Wheel",
        notes: 'Run on my hamster wheel',
        status_id: 2,
        user_id: 5,
    },
];

const seedStatus = () => Task.bulkCreate(TaskData);

module.exports = seedStatus;