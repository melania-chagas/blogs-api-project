const express = require('express');

const controllerLogin = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', controllerLogin);

module.exports = loginRouter;
