const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
    name: 'maykow',
    email: 'maykowvictor9@gmail.com',
    password: '1234'
});

module.exports = factory;