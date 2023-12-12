const { Sequelize} = require('sequelize')
const db = require('../database/database');
const Patient = db.define('Patients', {
  patient_name: {
    type: Sequelize.STRING,
  },
  patient_dob: {
    type: Sequelize.DATEONLY,
  },
  patient_sex: {
    type: Sequelize.STRING,
  },
  patient_address: {
    type: Sequelize.STRING,
  },
  patient_maritial_status: {
    type: Sequelize.STRING,
  },
  patient_phone: {
    type: Sequelize.STRING,

  },
  patient_email: {
    type: Sequelize.STRING,
  }
});


module.exports = Patient;