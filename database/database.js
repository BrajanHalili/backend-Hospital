const { Sequelize } = require('sequelize')

require('dotenv').config()
//const {Client} = require('pg')

const db = new Sequelize("Hospital", "postgres", process.env.password, {
    host: 'localhost',
    dialect: 'postgres',
    port: '5434'
  })

/**const db = new Sequelize({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: process.env.password,
})


const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: process.env.password,
    database: "Hospital"
})
client.connect();**/

module.exports = db;