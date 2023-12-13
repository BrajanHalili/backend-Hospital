const { Sequelize } = require('sequelize')
const db = require('../database/database');
const Doctor = db.define('Doctors', {
  doctor_name: {
    type: Sequelize.STRING,
  },
  doctor_dob: {
    type: Sequelize.DATEONLY,
  },
  doctor_sex: {
    type: Sequelize.STRING,
  },
  doctor_address: {
    type: Sequelize.STRING,
  },
  doctor_specialty: {
    type: Sequelize.STRING,
  },
  doctor_license_number: {
    type: Sequelize.STRING,
  }
});


module.exports = Doctor;