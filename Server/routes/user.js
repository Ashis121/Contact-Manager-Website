const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


//This will be used for new user registration
router.post('/register',userController.userRegister)

//This will be used for usesr login
router.post('/login',userController.userLogin)

module.exports = router;