const mongoose = require('mongoose') ; 
const crypto  =require('crypto')  ;
const {v1 : uuid} = require('uuid') ;
const UserSchema = new mongoose.Schema({
    username : {
        trim : true , 
        type:String , 
        required : true ,
        minlength : 4 ,
        unique :true
    } ,
    hashed_password :{
        type :String , 
        required : true
    } , 
    role :{
        type :Number
    }
}) ; 

UserSchema.virtual('password')
 .set((password)=>{
    this._password  = password  ;
    this.salt = uuid() ; 
    this.hash_password = this.encryptPassword(password) ; 
}) 
.get(()=>{
    return this.password
})  ;

UserSchema.method = {
    authenticate : function(plainText){
        return this.encryptPassword(plainText) === this.hash_password
    } , 
    encryptPassword :(password)=>{
        if(!password) return "" ; 
        try{
            return crypto.createHmac("sha1",this.salt)
            .update(password)
            .digest("hex")
        } catch(err){
            return ""
        }
    }
}

module.exports = mongoose.model('User',UserSchema) ; 