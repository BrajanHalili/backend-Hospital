const express = require("express");
const app = express();
const db = require('./database/database')
const cors = require('cors')

const { Patient } = require("./models/Patient")
db.authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(express.json());
app.get('/', (req, res) => {
    console.log("Here");
    res.send("Hello");
})

app.use('/patient', require('./routes/patients'));
app.use('/appointment', require('./routes/appointments'));
app.use('/doctor', require('./routes/doctors'));
app.use('/search', require('./routes/search'));

app.listen(3006, () => {
    console.log("server running");
});
