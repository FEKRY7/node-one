
const express = require('express')
const usercontroler = require('./../Controler/UsersControl.js')
const users = express.Router()
const auth = require('./../Maddewares/Authenticate.js')

users.route('/')
.get(auth,usercontroler.allusers)

users.route('/regester')
.post(usercontroler.regester)

users.route('/login')
.post(usercontroler.login)


module.exports = users















