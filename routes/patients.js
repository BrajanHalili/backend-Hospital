const express = require('express');
const router = express.Router();
const Patient  = require('../models/Patient');
const db = require('../database/database')

  // Add Access Control Allow Origin headers

//Get patients list
router.get('/', (req, res) => 
    Patient.findAll()
      .then(patients => {
        console.log(patients);
        res.send(patients);
      })
      .catch(err=>console.log(err)));
    //let patients = Patient.findAll();
    //console.log(patients);
    //res.send("Patients");

router.route("/add").post((req,res)=>{
      Patient.create({
    patient_name: req.body.name,
    patient_dob: req.body.dob,
    patient_sex: req.body.sex,
    patient_address: req.body.address,
    patient_maritial_status: req.body.maritial_status,
    patient_phone: req.body.phone,
    patient_email: req.body.email
      })
      console.log("Patient created");
})
  //res.json({"users": ["userOne", "userTwo", "userThree"]})

//Add default patient
/*router.get('/add', async(req,res)=>{
  const data = {
    patient_name: 'John Smith',
    patient_dob: '1993-04-20',
    patient_sex: 'Male',
    patient_address: '123 Side St,Place,NY',
    patient_maritial_status: 'Married',
    patient_phone: 987654321,
    patient_email: 'smith@email.com'
  }
  Patient.create({
  patient_name: data.patient_name,
    patient_dob: data.patient_dob,
    patient_sex: data.patient_sex,
    patient_address: data.patient_address,
    patient_maritial_status: data.patient_maritial_status,
    patient_phone: data.patient_phone,
    patient_email: data.patient_email
  })
    .then(patient =>{ 
      console.log(patient);
      res.redirect('/patient');
    })
    .catch(err=>console.log(err));
})  */

    //Get patient by PK
    router.get('/:id', (req,res) =>{
      Patient.findByPk(req.params.id)
        .then(patient => {
          console.log(patient);
          res.send(patient);
        })   
        .catch(err=>console.log(err));
  });

//Delete patient
router.delete('/:id', function(req, res, next) {
    Patient.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Deleted a patient!"))
      .catch(err => next(err));
  });


//Update patient address
router.get('/update/:id/:address', async(req,res)=>{
  await Patient.update({ patient_address: req.params.address }, {
    where:{
      id: req.params.id
    }
  })
  .then(()=>{
    console.log("Update successful");
    res.redirect('/patient/'+req.params.id);
  })
  .catch(err=>console.log(err));
})

module.exports = router;