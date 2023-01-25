const { body } = require('express-validator');

registerSchema = [
    body('email').exists({checkFalsy:true}).withMessage('Email is required field')
                 .isEmail().withMessage('please enter valid email'),
    body('gender').isLength({ min:4 }).withMessage('The gender field should be minimum 4 characters'),
]

loginSchema = [
    body('email').exists({checkFalsy:true}).withMessage('Email is required field'),
    body('password').exists({checkFalsy:true}).withMessage('Password is required filed'),
]

resetPasswordSchema = [
    body('password').exists({checkFalsy:true}).withMessage('Password is required field')
                    .isLength({min:7, max:16}).withMessage('The password field should be minimum 7 and maximum 16 characters')
]

module.exports = {registerSchema, loginSchema, resetPasswordSchema}
