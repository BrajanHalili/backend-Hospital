const express = require("express");
const app = express();
const db = require('./database/database')

const {Patient} = require("./models/Patient")

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

app.get('/', (req,res) =>{
    console.log("Here");
    res.send("Hello");
})

app.use('/patient', require('./routes/patients'));
app.use('/appointment', require('./routes/appointments'));
app.use('/doctor', require('./routes/doctors'));
/*app.get('/insert', (req,res)=>{
    Patient.create({
        patient_name: 'Jane Smith',
        patient_dob: '1996-05-15',
        patient_sex: 'Female',
        patient_address: 'Nowhere road, Earth',
        patient_maritial_status: 'Single',
        patient_phone: 987654321,
        patient_email: 'smth@mail.com'
    }).catch((err)=>{
        if(err){
            console.log(err);
        }
    });
    res.send("insert");
})*/



    //{include: [Instructor]}
    //Patient.sync();
    //let patients = await Patient.findAll();
    //console.log(patients);
    //res.status(200).json(patients);
    //res.send("Hello patients");
//app.use("/patients", apiRouter);


//db.sequelize.sync().then((req) => {
app.listen(3006,()=>{
    console.log("server running");
});
//})
