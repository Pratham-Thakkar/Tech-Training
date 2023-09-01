const express = require('express')
const cdRouter = require('./routes/cd')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.use('/cd',cdRouter)

app.use((req,res,next)=>{
    res.sendFile(path.join(path__dirname,'views','404.html'))
    next()
})

app.listen(3000)