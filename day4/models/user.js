const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    about: String,
    age:{
        type: Number,
        default: 0
    }
})
module.exports = mongoose.model('User',userSchema)
