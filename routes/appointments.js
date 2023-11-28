const express = require('express');
const router = express.Router();
const Patient  = require('../models/Patient');
const Appointment  = require('../models/Appointment');
const db = require('../database/database')

//Get all appointments
router.get('/', (req, res) => 
    Appointment.findAll()
      .then(patients => {
        console.log(patients);
        res.send(patients);
      })
      .catch(err=>console.log(err)));

//Add default appointment
router.get('/add', (req,res)=>{
    const data = {
        patient_id: 3,
        doctor_id: 1,
        appointment_date: '2023-12-10',
        appointment_time: '12:30:00',
        appointment_reason: 'Headache'
    }
    Appointment.create({
        patient_id: data.patient_id,
        doctor_id: data.doctor_id,
        appointment_date: data.appointment_date,
        appointment_time: data.appointment_time,
        appointment_reason: data.appointment_reason
    })
    .then(appointment =>{ 
        console.log(appointment);
        res.redirect('/appointment');
      })
      .catch(err=>console.log(err));
})

//Get appointment by id
router.get('/:id', (req,res) =>{
    Appointment.findByPk(req.params.id)
      .then(appointment => {
        console.log(appointment);
        res.send(appointment);
      })   
      .catch(err=>console.log(err));
});

//Delete appointment
router.get('/delete/:id', async(req,res)=>{
    await Appointment.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        console.log("Appointment deleted");
        res.redirect('/appointment');
    })
})

//Update appointment date
router.get('/update/:id/:date', async(req,res)=>{
    await Appointment.update({ appointment_date: req.params.date}, {
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        console.log("Appointment date updated");
        res.redirect('/appointment/' + req.params.id);
    })
})

module.exports = router;