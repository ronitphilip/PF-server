// to load .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/connection')

const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads', express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log('Server running at PORT:', PORT)  
})

//https://localhost:300/ - get
pfServer.get('/',(req,res)=>{
    res.status(200).send('Hi, Welcome to PF-SERVER!')
})
