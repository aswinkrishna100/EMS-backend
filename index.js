require('dotenv').config()  // keep secret data in .env
const express = require('express')
const cors = require('cors')  // cors used to communicate btw port
require('./DB/connect')
const router = require('./Routes/router')

const crudServer = express() // express add in crudserver

const port = 4000 || process.env.PORT 

// middlewares use in crudserver
crudServer.use(cors())
crudServer.use(express.json())  // express.json is used to convert data into json format
crudServer.use(router)

crudServer.listen(port,()=>{
    console.log(`Server is running on port ${port} and waiting for client requests1`);
})

crudServer.get('/',(req,res)=>{
    res.send(`<h1>Server is Running</h1>`)
})

