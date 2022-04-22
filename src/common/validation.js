const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
    rePassword:Joi.any().valid(Joi.ref('password')).required()
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
});




module.exports = {
    registerSchema,
    loginSchema
} 