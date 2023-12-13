const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const db = require('../database/database')

//Get all appointments
router.get('/', (req, res) =>
    Appointment.findAll()
        .then(patients => {
            console.log(patients);
            res.send(patients);
        })
        .catch(err => console.log(err)));

//Add default appointment
router.route("/add").post((req, res) => {
    Appointment.create({
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id,
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time,
        appointment_reason: req.body.appointment_reason
    })
        .then(() => res.status(201).json("Created an Appointment!"))
        .catch(err => console.log(err));
    console.log("Patient created");

})


//Get appointment by id
router.get('/:id', (req, res) => {
    Appointment.findByPk(req.params.id)
        .then(appointment => {
            console.log(appointment);
            res.send(appointment);
        })
        .catch(err => console.log(err));
});

//Delete appointment
router.delete('/:id', function (req, res, next) {
    Appointment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json("Deleted an appointment!"))
        .catch(err => next(err));
});

//Update appointment date
router.get('/update/:id/:date', async (req, res) => {
    await Appointment.update({ appointment_date: req.params.date }, {
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            console.log("Appointment date updated");
            res.redirect('/appointment/' + req.params.id);
        })
})

module.exports = router;