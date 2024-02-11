
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const Usernew = new Schema({
  username:{type:String , required:true},
  email:{type:String , required:true , validate:[validator.isEmail]},
  password:{type:String , required:true }
})

const User = mongoose.model('user',Usernew)
module.exports=User










