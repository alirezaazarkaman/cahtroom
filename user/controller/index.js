const axios = require('axios') ; 
const User = require('../models/user') ; 
const usr = new User(req.body)  ;
exports.signin = (res,req)=>{
    axios.post('localhost:3000/validate',{
        data:usr
    })
    .then(console.log('send')) ; 
}
exports.login = (req,res)=>{
    axios.post('localhost:3000/validate',{
        data :usr
    })
    .then(console.log('login data sended')) ; 
}