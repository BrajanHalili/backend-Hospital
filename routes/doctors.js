const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const db = require('../database/database')

//Get doctors list
router.get('/', (req, res) =>
  Doctor.findAll()
    .then(doctors => {
      console.log(doctors);
      res.send(doctors);
    })
    .catch(err => console.log(err)));

//Add default doctor

router.route("/add").post((req, res) => {
  Doctor.create({
    doctor_name: req.body.name,
    doctor_dob: req.body.dob,
    doctor_sex: req.body.sex,
    doctor_address: req.body.address,
    doctor_specialty: req.body.specialty,
    doctor_license_number: req.body.license_number,
  })
    .then(() => res.status(201).json("Created a Doctor!"))
  console.log("Doctor created");
})

//Get doctor by PK
router.get('/:id', (req, res) => {
  Doctor.findByPk(req.params.id)
    .then(doctor => {
      console.log(doctor);
      res.send(doctor);
    })
    .catch(err => console.log(err));
});

//Delete doctor
router.delete('/:id', function (req, res, next) {
  Doctor.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a Doctor!"))
    .catch(err => next(err));
});


//Update doctor address
router.get('/update/:id/:address', async (req, res) => {
  await Doctor.update({ doctor_address: req.params.address }, {
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      console.log("Update successful");
      res.redirect('/doctor/' + req.params.id);
    })
    .catch(err => console.log(err));
})
module.exports = router;