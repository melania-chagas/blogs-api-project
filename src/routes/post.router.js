const express = require('express');

const validationJWT = require('../middlewares/validationJWT');

const { controllerGetAllPosts, controllerGetPostById } = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.get('/:id', validationJWT, controllerGetPostById);
postRouter.get('/', validationJWT, controllerGetAllPosts);

module.exports = postRouter;
