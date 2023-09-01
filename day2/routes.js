const fs = require('fs')
const routesHandler = (req,res)=>{
    if(req.url === '/message' && req.method==='GET'){
        res.write('<body>')
        res.write('<form action="/message" method="POST"> <input type="text" name="msg" placeholder="Enter your message"/> <button type="submit"> Submit</button></form>')
        res.write('</body>')
        res.end()
        return;
    }
    else if(req.url === '/message' && req.method === 'POST'){
        const body=[];
        let parsedBody='';
        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        req.on('end',  ()=>{
            parsedBody = Buffer.concat(body).toString().split('=')[1]
            fs.writeFileSync('message.txt', parsedBody)
            fs.writeFile('message.txt', parsedBody, (err)=>{
                if(err){
                    res.statusCode=500
                    res.setHeader('Location','/')
                    return res.end();
                }
                res.statusCode=200
                res.setHeader('Location','/')
                return res.end();
            })
        })
    }
    else{
        res.write('<h1>Hello World</h1>')
        res.end()
    }
    
}
const name = "Pratham"

module.exports = {routesHandler, name}

//event handling and life cycle of Node.js