const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(userRoutes)

mongoose.connect('mongodb+srv://pratham:0809Pratham@cluster0.hfa5lw3.mongodb.net/titans')
    .then(()=>{
        console.log('connected')
        app.listen(3000)
    })
    .catch((err)=>{
        console.log('unable to connect');
        console.log(err);
    })
