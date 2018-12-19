const Sequelize = require('sequelize')
const BurgerModel = require('../models/burger')

const sequelize = new Sequelize('burgers_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const burger = BurgerModel(sequelize, Sequelize);

module.exports = burger;