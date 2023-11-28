const express = require('express');
const router = express.Router();
const Doctor  = require('../models/Doctor');
const db = require('../database/database')

//Get doctors list
router.get('/', (req, res) => 
    Doctor.findAll()
      .then(doctors => {
        console.log(doctors);
        res.send(doctors);
      })
      .catch(err=>console.log(err)));

//Add default doctor
router.get('/add', async(req,res)=>{
    const data = {
      doctor_name: 'Jimmy Duke',
      doctor_dob: '1975-12-30',
      doctor_sex: 'Male',
      doctor_address: '123 Main St,New Place,NY',
      doctor_specialty: 'Urologist',
      doctor_license_number: 1234567,
    }
    Doctor.create({
        doctor_name: data.doctor_name,
        doctor_dob: data.doctor_dob,
        doctor_sex: data.doctor_sex,
        doctor_address: data.doctor_address,
        doctor_specialty: data.doctor_specialty,
        doctor_license_number: data.doctor_license_number
    })
      .then(doctor =>{ 
        console.log(doctor);
        res.redirect('/doctor');
      })
      .catch(err=>console.log(err));
  })  

    //Get patient by PK
    router.get('/:id', (req,res) =>{
        Doctor.findByPk(req.params.id)
          .then(doctor => {
            console.log(doctor);
            res.send(doctor);
          })   
          .catch(err=>console.log(err));
    });

  //Delete doctor
  router.get('/delete/:id', async(req,res)=>{
    await Doctor.destroy({
      where:{
        id: req.params.id
      }
    })
      .then(()=>{
        console.log("Delete successful");
        res.redirect('/doctor/');
      })
      .catch(err=>console.log(err));
  })

  //Update doctor address
router.get('/update/:id/:address', async(req,res)=>{
    await Doctor.update({ doctor_address: req.params.address }, {
      where:{
        id: req.params.id
      }
    })
    .then(()=>{
      console.log("Update successful");
      res.redirect('/doctor/'+req.params.id);
    })
    .catch(err=>console.log(err));
  })
module.exports = router;