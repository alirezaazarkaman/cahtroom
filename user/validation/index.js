exports.UserSignupValidetor = (req,res,next)=>{
    req.check('username' , 'username should between 8 to 32 ')
    .matches(/.+\@.+\..+/)
    .withMessage('username most contain @')
    .isLength({
        min : 8 , 
        max : 32 
    }) ; 
    req.check('password','password is required').notEmpety() ; 
    req.check('password').isLength({
        min: 6 
    })
    .withMessage('password lengh should more then 6 ') 
    .matches(/\d/)
    .withMessage('password must contain of number') ; 
    const error = req.validationErrors() ; 
    if(error) {
        const firstError = error.map(error=>error.msg)[0]  ;
        return res.status(400).json({error : firstError})  ;
    }
    next() ; 
}