
const Users = require('./../models/Users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const HTTPE = require('./../folderS,F,E/S,F,E.JS')
const httprespons = require('./../utilites/httperespons.js')

const allusers = async(req,res)=>{
try{
    const allclint = await Users.find({},{'__v':false})
    if(!allclint){
        httprespons.firest(res,[],202,HTTPE.FAIL)  
    }else{
         httprespons.firest(res,[allclint],202,HTTPE.SUCCESS)
    }
}catch{
    httprespons.sacund(res,[],404,HTTPE.ERROR)
}
res.end()
}

const regester = async(req,res)=>{
const Thander = req.body
const oldest = await Users.find({email:Thander.email})
if(oldest.length !== 0){
    res.json({'MsG':'Email is notEmibty'}) 
}else{
    const hashNew = await bcrypt.hash(Thander.password,10)
    const allclint = await Users.create({
        username:Thander.username,
        email:Thander.email,
        password:hashNew
      })
      httprespons.firest(res,[allclint],202,HTTPE.SUCCESS)
}

res.end()
}
 

const login = async(req,res)=>{
    const Thander = req.body
    const oldest = await Users.find({email:Thander.email})
    if(oldest.length == 0){
    res.json({'MsG':'Email is notEmibty'}) 
    }else{
     const compare = await bcrypt.compare(Thander.password,oldest[0].password)
       if(compare){
        const token= await jwt.sign({
        username:oldest[0].username,
        email:oldest[0].email,
        },process.env.JWT_SECRET_KEY)
        res.json({'MsG':'Password is sacces',token})
       }else{
        res.json({'MsG':'Try agein'})
       } 
    }
    res.end()
}


module.exports={
    allusers,
    regester,
    login
}























//__________________________________________________________



