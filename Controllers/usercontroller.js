const users = require("../Models/userModel")

exports.addUser = async(req,res)=>{
  const {name,email,age,desig,salary,experience,place} = req.body
  console.log(name,email,age,desig,salary,experience,place);
  
  try{
     if(!name || !email || !age || !desig || !salary || !experience || !place){
    res.status(406).json('Please fill the form completely')
  }else{
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json("User already exists")
    }else{
        const newuser = new users({name,email,age,desig,salary,experience,place})
        await newuser.save()
        res.status(200).json(newuser)
    }
  }}
  catch(err){
    res.status(500).json("Internal Server Error")
    console.log(err);
  }
}

exports.getUser = async(req,res)=>{
   try{
    const userdetails = await users.find()
    res.status(200).json(userdetails)
  }
  catch(err){
    res.status(500).json("Internal Server Error")
    console.log(err);
  }
}

exports.editUser = async(req,res)=>{
  const {name,email,age,desig,salary,experience,place,id} = req.body
  console.log(name,email,age,desig,salary,experience,place,id);
  
  try{
    if(!name || !email || !age || !desig || !salary || !experience || !place || !id){
      res.status(406).json("Please fill the form completely")
    }else{
      const editingUser = await users.findByIdAndUpdate({_id:id},{name,email,age,desig,salary,experience,place},{new:true})
      await editingUser.save()
      res.status(200).json(editingUser)
    }
  }
  catch (err){
    res.status(500).json('Internal Server Error')
    console.log(err);
  }
}

exports.deleteUser = async(req,res)=>{
  const {id} = req.params
  try{const user = await users.findByIdAndDelete({_id:id})  
  res.status(200).json("User data deleted")
  }catch(err){
    res.status(500).json("Internal Server Error")
    console.log(err);
  }
}
