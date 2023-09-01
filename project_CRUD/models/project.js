const fs = require('fs')
const path =require('path')
const pathToData = path.join(path.dirname(require.main.filename),'data','project.json')

const getProjectsFromFile = (req,res)=>{
    fs.readFile(pathToData,(err,content)=>{
        if(err){
            return ({data:[]})
        }
        return content
    })
}


module.exports = class Project{
    constructor(id,title,description){
        this.id=id;
        this.title= title;
        this.description=description;
        console.log(this);
    }

    save(){
        getProjectsFromFile()
    }

}

