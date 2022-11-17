const express = require('express');

const validationJWT = require('../middlewares/validationJWT');

const { controllerAddNewCategorie } = require('../controllers/categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validationJWT, controllerAddNewCategorie);

module.exports = categoriesRouter;