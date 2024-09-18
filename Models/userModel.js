const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    age:{
        type:Number,
        required:true
    },
    desig:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})

const users = mongoose.model('users',userSchema)
module.exports = users