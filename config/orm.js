
const Sequelize = require('sequelize')
console.log(process.env.database);
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
const BurgerModel = require('../models/burger')
const burger = BurgerModel(sequelize, Sequelize);

module.exports = burger;