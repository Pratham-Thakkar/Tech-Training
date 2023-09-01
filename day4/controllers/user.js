const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = (req, res) => {
    let { body: { email, password } } = req;
    if (!email || !password) {
        return res.status(422).send({ status: 'failed', message: 'Email or password is empty' })
    }
    email = email.toLowerCase();
    
    User.findOne

    bcrypt.hash(password, saltRounds, function (err, hash) {
        const user = new User({ email, password : hash})
        user.save() //enters value or record into collections
            .then((result) => {
                console.log(result);
                return res.status(201).send({ status: 'Success', message: 'User added' })
            })
            .catch(() => {
                return res.status(500).send({ status: 'failed', message: 'Something went wrong' })
            })
    });

}

exports. verifyUser = (req,res)=>{
    const {body: {email,password}}=req
}

//_id is being created by mongodb defaultly