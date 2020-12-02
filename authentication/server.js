const express = require('express') ; 
const signin  = require('./routes/index')
const app = express() ;
const mongoose = require('mongoose')
require('dotenv').config() ;  


app.post('/user/validate',signin)
mongoose.connect("mongodb://localhost:27017/doc",{
    useNewUrlParser :true , 
    useCreateIndex : true ,
    useUnifiedTopology : true
}).then(()=> {
    console.log('db connect') ; 
}) ; 

const port = process.env.PORT || 3000 ; 

app.listen(port,()=>{
    console.log(`authentication services run on :${port} port `)
})
module.exports = app ; 