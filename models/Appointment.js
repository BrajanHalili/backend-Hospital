const { Sequelize} = require('sequelize')
const db = require('../database/database');
const Appointment = db.define('Appointments', {
    patient_id: {
        type: Sequelize.INTEGER,
    },
    doctor_id: {
        type: Sequelize.INTEGER,
    },
    appointment_date: {
        type: Sequelize.DATEONLY,
    },
    appointment_time: {
        type: Sequelize.TIME,
    },
    appointment_reason: {
        type: Sequelize.STRING,
    },
});

module.exports = Appointment;