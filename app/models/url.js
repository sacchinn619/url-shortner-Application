const mongoose=require('mongoose')
const validator=require('validator')
const sh = require('shorthash')


const Schema=mongoose.Schema
const urlSchema=new Schema({
    title:{
        type:String,
        required:[true,'task must be provided']
    },
    originalUrl:{
        type:String,
        validate:{
            validator:function(value){
                validator.isEmail(value)
                // return true
                },
    message:function(){
        return ('invalid email')
         }
       }
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    },
    hashedUrl:{
        type:String,
    }
})

urlSchema.pre('save',function(next){
  this.hashedUrl=sh.unique(this.originalUrl)
  next()
})

//create a model//
const Url=mongoose.model('Url',urlSchema)

module.exports=Url


