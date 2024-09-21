const jwt = require('jsonwebtoken')

const jwtAuthorization = (req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1]
    try{const verifiedToken = jwt.verify(token,"supersecretkey12345")
    next()
}
catch(err){
    res.status(401).json("Unauthorized Access")
}
}

module.exports = jwtAuthorization