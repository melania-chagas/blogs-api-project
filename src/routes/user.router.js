const express = require('express');

const loginValidation = require('../middlewares/validationLogin');
const controllerUser = require('../controllers/user.controller');

const { signUp } = controllerUser;

const userRouter = express.Router();

userRouter.post('/', loginValidation, signUp);

module.exports = userRouter;