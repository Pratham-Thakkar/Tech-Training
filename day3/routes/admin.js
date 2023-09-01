const express = require('express') 
const router = express.Router()

router.post('/addCD',(req,res)=>{
    //process some
    //send response
    const {body:{title}}=req
    console.log(title);
    res.send('Added CD')
})

router.post('/addAgent',(req,res)=>{
    res.send('Added Agent')
})

module.exports=router