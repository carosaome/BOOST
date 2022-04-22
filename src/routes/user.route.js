const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const userController = require('../controllers/user.controller')
const {loginSchema, registerSchema} = require('../common/validation')
const validateInput = require('../middlewares/validateInput.middleware')

router.get('', (req, res)=>{
    res.send('user page')
})
router.post('/register', validateInput(registerSchema, 'body'), userController.register);
router.post('/login', validateInput(loginSchema, 'body'), userController.login);

module.exports = router