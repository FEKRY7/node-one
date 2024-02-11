const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShogerDady = new Schema({
  title:{type:String , required:[true ,'There is an error in Title']},
  specifications:{type:String , required:[true ,'There is an error in Specifications']},
  price:{type:String , required:[true ,'There is an error in Price']},
  engine:{type:String , required:[true ,'There is an error in Engine']},
  pattern:{type:String , required:[true ,'There is an error in Pattern']},
  avater:String
})

const Article = mongoose.model('product',ShogerDady)
 
module.exports=Article




























