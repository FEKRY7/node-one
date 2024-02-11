const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const roter = require('./Router/ProdectRouter.js')
const users = require('./Router/UsersRouter.js')
require('dotenv').config()
app.use(cors())
app.listen(process.env.PORT,()=>{
   console.log('server is raning'); 
})
const url = process.env.MONGO_URL
mongoose.connect(url)
.then(()=>console.log('connect'))
.catch((eer)=>console.log(eer))
app.use(express.json())
app.use('/api/article',roter)
app.use('/api/users',users)
app.use('*',(req,res)=>{
    res.status(404).json({'MsG':'I Cant Found'});
})
