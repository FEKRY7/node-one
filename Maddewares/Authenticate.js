
const jwt = require('jsonwebtoken')
 
const auth = async(req,res,next)=>{
    const token = req.headers.axslans
    const verify = await jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(verify){
    next()
    }else{
       res.json({'MsG':'Token Is Rong'}) 
    }
}

module.exports=auth





 





































