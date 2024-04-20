const express = require("express")


const mongoose = require('mongoose')

const cors = require("cors")
const employeeModule = require('./Models/employe')


const app = express()

app.use (express.json())

app.use(cors())

mongoose.connect("mongodb://127.0.0.1/registerpage");
app.post('/employee',(req,res)=>{
    employeeModule.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))

})
app.listen(3002, () => {

console.log("server is running")

})