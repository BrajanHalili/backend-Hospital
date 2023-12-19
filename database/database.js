const { Sequelize } = require('sequelize')

require('dotenv').config()
//const {Client} = require('pg')

const db = new Sequelize("Hospital", process.env.user, process.env.password, {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = db;