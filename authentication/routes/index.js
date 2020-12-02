const express = require('express') ; 
const app = express() ; 
const {signin,signup} = require('../controller/auth') ; 

app.post('/user/validate',signin)
app.post('/user/validate',signup)

module.exports = app ; 