const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const router = require('./routes/admin')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',router)

app.use((req,res,next)=>{
    res.sendStatus(404)
    res.sendFile(path.join(__dirname, 'views', '404.html'))
    next()
})

app.listen(3000)