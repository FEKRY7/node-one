const firest = (res,data,statuscode,statustext)=>{
return res.status(statuscode).json(
    {
        'status':statustext,
         'data':{
            "products":data
        }
    }
)
}

const sacund = (res,massege,statuscode,statustext)=>{
    return res.status(statuscode).json(
        {
            'status':statustext,
            'massege':massege
        }
    )
    }


module.exports = {
    firest,
    sacund
}