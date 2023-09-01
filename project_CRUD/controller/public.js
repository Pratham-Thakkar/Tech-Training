const fs = require('fs')
const path = require('path')

const publicController = (req, res)=>{
    //fetch the file
    const pathToData = path.join(path.dirname(require.main.filename),'data','project.json')
    fs.readFile(pathToData,(err, content)=>{
        if(err){
            return res.status(500).send({status:'failed', data: []})
        }
        //parse the content
        const data = JSON.parse(content)
        //send response
        res.status(200).send({status:"success", projects:{data}})
    })
}

module.exports= publicController