const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const db = require('../database/database')

//Get all appointments
router.get('/', (req, res) =>
    Appointment.findAll()
        .then(appointments=> {
            console.log(appointments);
            res.send(appointments);
        })
        .catch(err => console.log(err)));


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
//Add default appointment
router.route("/add").post((req, res) => {
    Appointment.create({
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id,
        patient_name: req.body.patient_name,
        doctor_name: req.body.doctor_name,
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time,
        appointment_reason: req.body.appointment_reason
    })
        .then(() => res.status(201).json("Created an Appointment!"))
        .catch(err => console.log(err));
    console.log("Patient created");

})
//Update appointment date
router.route('/update/:id').put(async(req,res)=>{
    await Appointment.update({ 
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id,
        doctor_name: req.body.doctor_name,
        patient_name: req.body.patient_name,
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time,
        appointment_reason: req.body.appointment_reason
    }, 
        {
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            console.log("Appointment date updated");
        })
})

module.exports = router;