const admin = require("../Models/adminModel")
const jwt = require('jsonwebtoken')

exports.addAdmin= async(req,res)=>{
    const {name,email,password}= req.body

    try{
        if(!name || !email || !password){
            res.status(406).json("Please fill the Form Completely")
        }else{
            const existingAdmin = await admin.findOne({email})
            if(existingAdmin){
                res.status(406).json("Admin Already Exists")
            }else{
                const newadmin = new admin({name,email,password})
                await newadmin.save()
                res.status(200).json(newadmin)
            }
        }
    }
    catch(error){
        res.status(500).json("Internal Server Error")
        console.log(error);
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body

    try{
        const existingUser = await admin.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},"supersecretkey12345")
            res.status(200).send({existingUser,token})
        }else{
            res.status(404).json("Incorrect username and password")
        }
    }
    catch(error){
        res.status(500).send("Internal Server Error")
        console.log(error);
    }
}
