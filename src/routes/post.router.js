const express = require('express');

const validationJWT = require('../middlewares/validationJWT');

const { controllerGetAllPosts } = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.get('/', validationJWT, controllerGetAllPosts);

module.exports = postRouter;
