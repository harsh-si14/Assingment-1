const express = require("express")


const mongoose = require('mongoose')

const cors = require("cors")
const usermodule = require('./Models/User')


const app = express()

app.use (express.json())

app.use(cors())

mongoose.connect("mongodb://127.0.0.1/loginpage");
app.post('/user',(req,res)=>{
    usermodule.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})
app.listen(3001, () => {

console.log("server is running")

})