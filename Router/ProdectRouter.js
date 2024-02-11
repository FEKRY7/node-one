
const express = require('express')
const ProdectControl = require('./../Controler/ProdectControl.js')
const roture = express.Router()
const multer = require('multer')

const ok = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        const fn = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const glfa = file.mimetype.split('/')[1] 
        const filesname = fn + '.' + glfa 
        cb(null, filesname)
    }
  })
  
  const upload = multer({ storage: ok })
 

roture.route('/')
.get(ProdectControl.one)
.post(upload.single('avater'),ProdectControl.three)

roture.route('/:ta')
.get(ProdectControl.tow)
.patch(ProdectControl.four)
.delete(ProdectControl.sexs)

module.exports=roture





































