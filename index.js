const express=require('express')
const app=express()
const configureDB=require('./config/database')
const router=require('./config/routes')
const port=3075


//set up db
configureDB()
app.use(express.json())     //parses the json data
app.use(router)



app.listen(port,()=>{
    console.log('server connected to port ',port )
})