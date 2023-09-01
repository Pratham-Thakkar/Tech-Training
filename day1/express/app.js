const expess = require('express')
const app = expess()

//middleware for talent
app.use('/talent', (req,res,next)=>{
    console.log('talent authenticated')
    next()
})

//middleware for cd
app.use('/casting-director',(req,res,next)=>{
    console.log('casting director authenticated')
    next()
})

//middleware for agent
app.use('/agent', (req,res,next)=>{
    console.log('Agents Authenticated')
    next()
})

//middleware for admin
app.use('/admin', (req,res,next)=>{
    console.log('Admin Authenticated')
    next()
})

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.get('/talent',(req,res)=>{
    res.send('<h1>Dashboard for Talent</h1>')
})

app.get('/casting-director', (req,res)=>{
    res.send('<h1>Dashboard for Casting Directors </h1>')
})

app.get('/agent', (req,res)=>{
    res.send('<h1>Dashboard for Agents </h1>')
})

app.get('/admin', (req,res)=>{
    res.send('<h1>Dashboard for Admin </h1>')
})

app.use((req,res,next)=>{
    res.send("Page Not Found - 404")
})
app.listen(3000)