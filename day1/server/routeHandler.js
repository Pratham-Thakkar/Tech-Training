const fs = require('fs')
const routeHandler = (req,res)=>{
    console.log(req.url)
    console.log(req.method)
    if(req.url==='/message' && req.method==='GET'){
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg" placeholder="Enter Message"/><button type="submit">Submit</button></form></body>')
        res.end()
        return
    }
    else if(req.url==='/message' && req.method==='POST'){
        const data = []
        req.on('data',(chunk)=>{
            data.push(chunk)
        })

        req.on('end',()=>{
            const parsedData = Buffer.concat(data).toString().split('=')[1]
            fs.writeFile('message.txt', parsedData, (err)=>{
                if(err){
                    res.statusCode=500
                    res.write('Error in storing data')
                    res.end()
                }
            })
            res.statusCode=300
            res.write('<h1>Done Successfully </h1>')
            res.end()
        })
        return
    }
    res.write('<h1> Hello World </h1>')
    res.end()
}

const name = "Pratham"

module.exports ={
    routeHandler,
    name
}