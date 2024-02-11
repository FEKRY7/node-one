const Article = require('./../models/Article.js')
const http = require('./../folderS,F,E/S,F,E.JS')
const httpresponse = require('./../utilites/httperespons.js')



const one = async(req,res)=>{
    const query = req.query
    const limit = req.query.limit
    const page = req.query.page
    const skip = (page - 1) * limit
    try{
        const asyoulike = await Article.find({},{'__v':false}).limit(limit).skip(skip)    
        if(!asyoulike){
            httpresponse.firest(res,[],200,http.FAIL)
        }else{
            httpresponse.firest(res,asyoulike,200,http.SUCCESS)
        }
    }catch{
        httpresponse.sacund(res,[],404,http.ERROR)
    }
    res.end()
}


const tow = async(req,res)=>{
    
      
    try{
        const roter = req.params.ta
        const FindID = await Article.findById(roter)
        if(!FindID){
            httpresponse.firest(res,[],200,http.FAIL)
        }else{
            httpresponse.firest(res,FindID,200,http.SUCCESS)
        }
    }catch{
        httpresponse.sacund(res,[],404,http.ERROR)
    }
    res.end()
} 

const three = async(req,res)=>{
    try{
        const sora = req.file.filename
        const senders = req.body
        const FindID = await Article.create({
            title:senders.title,
            specifications:senders.specifications,
            price:senders.price,
            engine:senders.engine,
            pattern:senders.pattern,
            avater:sora
        })
        if(!FindID){
            httpresponse.firest(res,[],200,http.FAIL)
        }else{
            httpresponse.firest(res,'Done',200,http.SUCCESS)
        }
    }catch{
        httpresponse.sacund(res,[],404,http.ERROR)
    }
    res.end()
} 

const four = async(req,res)=>{   
    try{
        const roter = req.params.ta
        const senders = req.body
        const FindID = await Article.updateOne({'_id':roter},
        {age:senders.age})
        if(!FindID){
            httpresponse.firest(res,[],200,http.FAIL)
        }else{
            httpresponse.firest(res,FindID,200,http.SUCCESS)
        }
    }catch{
        httpresponse.sacund(res,[],404,http.ERROR)
    }
    res.end()
}

const sexs = async(req,res)=>{
    try{
        const roter = req.params.ta
        const FindID = await Article.findByIdAndDelete(roter)
        if(!FindID){
            httpresponse.firest(res,[],200,http.FAIL)
        }else{
            httpresponse.firest(res,FindID,200,http.SUCCESS)
        }
    }catch{
        httpresponse.sacund(res,[],404,http.ERROR)
    }
    res.end()
}

module.exports = {
    one,
    tow,
    three,
    four,
    sexs
}












