const users = require("../Models/userModel")

exports.addUser = async(req,res)=>{
  const {name,email,age,desig,salary,place} = req.body
  console.log(name,email,age,desig,salary,place);
  
  try{ if(!name || !email || !age || !desig || !salary || !place){
    res.status(406).json('Please fill the form completely')
  }else{
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json("User already exists")
    }else{
        const newuser = new users({name,email,age,desig,salary,place})
        await newuser.save()
        res.status(200).json(newuser)
    }
  }}
  catch(err){
    res.status(500).json("Internal Server Error")
    console.log(err);
    
  }

}
