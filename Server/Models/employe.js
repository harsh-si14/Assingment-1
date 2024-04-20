const mongoose = require('mongoose');

const employeScehma = new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

module.exports = mongoose.model('register',employeScehma);
