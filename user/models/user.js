const mongoose =require('mongoose') ; 
const crypto  =require('crypto')  ;
const {v1 : uuid} = require('uuid') ;
const UserSchema = new mongoose.Schema({
    username :{
        type :String , 
        trim :true , 
        required :true ,
        unique :true 
    } , 
    password : {
        type :String 
    } , 
    salt :{type:String}
},{timestamps : true}) ;   


module.exports = mongoose.model('User'); 