const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;


const userSchema = new  mongoose.Schema({
email:String,
password: String
});

const User =  mongoose.model('user' , userSchema);

module.exports = User;

