const { User } = require('../models');

const UserData = [
  {
    login: 'DArtagnan@email.com',
    pw: 'a',
  },
  {
    login: 'Porthos@email.com',
    pw: 's',
  },
  {
    login: 'Aramis@email.com',
    pw: 'd',
  },
  {
    login: 'Athos@email.com',
    pw: 'f',
  },
  {
    login: 'hamster.guss@email.com',
    pw: 'j',
  },
];

const seedStatus = () => User.bulkCreate(UserData);

module.exports = seedStatus;
