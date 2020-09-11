const express=require('express')
const router=express.Router()
const urlsCltr=require('../app/controllers/urlsCltr')



router.get('/api/urls',urlsCltr.list)
router.post('/api/urls',urlsCltr.create)



module.exports=router