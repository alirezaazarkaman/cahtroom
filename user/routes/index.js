const express = require('express') ; 
const app = express() ; 
const {signin , login} = require('../controller/index') ; 

app.post('/user/register',signin) ; 
app.post('/user/login',login) ; 
module.exports = app ; 