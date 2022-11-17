const express = require('express');

const validationJWT = require('../middlewares/validationJWT');

const { 
  controllerAddNewCategorie,
  controllerGetAllCategories, 
} = require('../controllers/categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validationJWT, controllerAddNewCategorie);
categoriesRouter.get('/', validationJWT, controllerGetAllCategories);

module.exports = categoriesRouter;