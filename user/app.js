const express = require('express') ; 
const app = express() ; 
require('dotenv').config() ; 
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/doc",{
    useNewUrlParser :true , 
    useCreateIndex : true ,
    useUnifiedTopology : true
}).then(()=> {
    console.log('db connect') ; 
}) ; 
const port = process.env.PORT || 3010
app.listen(port,()=>{
    console.log(`this app run on :${port} port`) ; 
})

module.exports = app ; 