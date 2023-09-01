const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(userRoutes)

mongoose.connect('')
    .then(()=>{
        console.log('connected')
        app.listen(3000)
    })
    .catch((err)=>{
        console.log('unable to connect');
        console.log(err);
    })
