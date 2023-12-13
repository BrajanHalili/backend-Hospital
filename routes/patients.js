const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const db = require('../database/database')

//Get patients list
router.get('/', (req, res) =>
  Patient.findAll()
    .then(patients => {
      console.log(patients);
      res.send(patients);
    })
    .catch(err => console.log(err)));

router.route("/add").post((req, res) => {
  Patient.create({
    patient_name: req.body.name,
    patient_dob: req.body.dob,
    patient_sex: req.body.sex,
    patient_address: req.body.address,
    patient_maritial_status: req.body.maritial_status,
    patient_phone: req.body.phone,
    patient_email: req.body.email
  })
    .then(() => res.status(201).json("Created a Patient!"))
  console.log("Patient created");
})

//Get patient by PK
router.get('/:id', (req, res) => {
  Patient.findByPk(req.params.id)
    .then(patient => {
      console.log(patient);
      res.send(patient);
    })
    .catch(err => console.log(err));
});

//Delete patient
router.delete('/:id', function (req, res, next) {
  Patient.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a patient!"))
    .catch(err => next(err));
});


//Update patient address
router.get('/update/:id/:address', async (req, res) => {
  await Patient.update({ patient_address: req.params.address }, {
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      console.log("Update successful");
      res.redirect('/patient/' + req.params.id);
    })
    .catch(err => console.log(err));
})

module.exports = router;