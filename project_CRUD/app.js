const express = require('express')
const cdRouter = require('./routes/cd')
const talentRouter = require('./routes/talent')
const publicRouter = require('./routes/public')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/cd',cdRouter)
app.use('/talent',talentRouter)
app.use('/',publicRouter)

app.listen(3000)