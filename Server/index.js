const express = require("express")


const mongoose = require('mongoose')

const cors = require("cors")
const module = require('./Models/user')


const app = express()

app.use (express.json())

app.use(cors())

mongoose.connect("mongodb://localhost://127.0.0.1:27017/loginpage");
app.post('/user',(req,res)=>{
    module.create(req.body)
    .then(users=>res.json(users))
    .er

})
app.listen(3001, () => {

console.log("server is running")

})