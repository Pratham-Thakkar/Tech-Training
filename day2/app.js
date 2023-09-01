// console.log("First Line")
// setTimeout(()=>{
//     console.log('Inside settimeout');
// },3000)
// console.log('Comment after settimeout')

// const fs = require('fs')
// fs.writeFileSync('hello1.txt', 'Hello world from Node')

// const http = require('http')
// const server = http.createServer((req,res)=>{ //new server
//     console.log('Hello what would you like today') //checking if its listening or not
//     console.log(req.headers); //checking what's in a req object
//     console.log(req.url)
//     res.write('<h1>Hello World</h1>') // responding to our request
//     res.end()
// }
// ).listen(3000); //listening to req

//serve acc to req, routes


//Run Time Err
//Syntax Err
//Logical err

//Express -> built on top of js, it a package
//talent agent admin cd -> middleware & dashboards
const express = require('express')
const app = express()

//middleware -> authenticate every req
//use -> middleware & get is a method

app.use('/',(req,res,next)=>{ //req res and what next , acts as a security gaurd
    console.log("first middleware");
    next() //done with analyzing move to next
})
app.use('/admin',(req,res,next)=>{ //req res and what next
    console.log("2nd middleware");// /admin/login has also need to get through this middle ware
    next()
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/admin',(req,res)=>{
    res.send('<h1>Hello Admin</h1>')
})
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found </h1>')
})
app.listen(3000) //server started and listening



