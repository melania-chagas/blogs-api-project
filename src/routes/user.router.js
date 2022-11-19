const express = require('express');

const loginValidation = require('../middlewares/validationLogin');
const {
  controllerSignUp,
  controllerGetAllUsers,
  controllerGetUserById,
  controllerDeleteUser,
} = require('../controllers/user.controller');

const validationJWT = require('../middlewares/validationJWT');

const userRouter = express.Router();

userRouter.post('/', loginValidation, controllerSignUp);
userRouter.get('/:id', validationJWT, controllerGetUserById);
userRouter.get('/', validationJWT, controllerGetAllUsers);
userRouter.delete('/me', validationJWT, controllerDeleteUser);

module.exports = userRouter;