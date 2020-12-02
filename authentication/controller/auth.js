const User = require('../models/user') ; 
const jwt = require('jsonwebtoken') ; 
const expressJWT = require('express-jwt') ;  
const axios = require('axios') ; 

exports.signin = (req,res)=>{
    const {username,password} =  req.body ; 
    User.findOne({username},(err,user)=>{
        if(err){
            axios({
                method: 'post',
                url: 'localhost:3010/user/login',
                data: {
                    err : "user not found"
                }
              });
        }
        const token = jwt.sign({_id : user.id},process.env.JWT_SECRET) ; 
        res.cookie('t',token,{expire : new Date() +300}) ; 
        //return user and token to frontend client 
        const {_id,name , email,role} = user 
       return axios({
            method :'post' , 
            url :'localhost:3010/user/login',
            data:{
                token:token ,user:{_id,email,role}
            }
        })
    }) ; 

}

/*exports.requireSignin= expressJWT({
    secret : 'foryou' , 
    userProperty : 'auth'
}) */
exports.signup = (req,res)=> {
    const user  = new User(req.body) ; 
    user.save((err,save)=>{
        if(err){
        return res.status(400).json({
            err : errorHandler(err) 
        }) ; 
    }
    user.salt = undefined 
    user.hashed_password = undefined
    axios.post('localhost:3010',{
        data : user
    }).then(console.log(user)) ; 
    }) ; 
    
}
