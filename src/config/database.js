// const dotenv = require('dotenv').config({
//   path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
// });

module.exports = {
  dialect: 'sqlite',
  storage: './__tests__/nodeauth.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};