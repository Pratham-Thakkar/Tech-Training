const fs = require ('fs')
const path = require('path')
const Project = require('../models/project')
const {v4:uuidv4} = require('uuid')

exports.createProject = (req,res)=>{
    //bring data from req.body
    const {body: {title, description}} = req;
    const newProject = new Project(uuidv4(),title,description)

    newProject.save()

    // // read the data from file
    // const pathToData = path.join(path.dirname(require.main.filename),'data','project.json')
    // fs.readFile(pathToData,(err,data)=>{
    //     if(err){
    //         res.send({data:[]})
    //     }
    //     //now parse the data
    //     const parseData = JSON.parse(data)
    //     parseData.push({id:uuidv4(),title,description})

    //     //now we need to wrtie this in a file
    //     fs.writeFile(pathToData,JSON.stringify(parseData),(err)=>{
    //         if(err){
    //             return res.status(500).send({status:'failde', data:[]})
    //         }
    //         res.send({status:'success', data:parseData})
    //     })
    // })

}

exports.updateProject = (req,res)=>{
    
}

exports.deleteProject = (req,res)=>{
    
}