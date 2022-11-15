const express = require('express');

const loginValidation = require('../middlewares/validationLogin');
const controllerUser = require('../controllers/user.controller');
const validationJWT = require('../middlewares/validationJWT');

const { controllerSignUp, controllerGetAllUsers } = controllerUser;

const userRouter = express.Router();

userRouter.post('/', loginValidation, controllerSignUp);
userRouter.get('/', validationJWT, controllerGetAllUsers);

module.exports = userRouter;