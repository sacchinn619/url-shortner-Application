const Url=require('../models/url')
const urlsCltr= { }


urlsCltr.list=(req,res)=>{
    Url.find()
    .then((urls)=>{
        res.json(urls)
    })
    .catch((err)=>{
        res.json((err))
    })
}
urlsCltr.create=(req,res)=>{
    const body=req.body
    const url=new Url(body)
    url.save()
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports=urlsCltr