const express = require('express');

const validationJWT = require('../middlewares/validationJWT');
const validationPost = require('../middlewares/validationPost');

const {
  controllerGetAllPosts,
  controllerGetPostById,
  controllerUpdatePost,
  controllerDeletePost,
} = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.get('/:id', validationJWT, controllerGetPostById);
postRouter.put('/:id', validationJWT, validationPost, controllerUpdatePost);
postRouter.get('/', validationJWT, controllerGetAllPosts);
postRouter.delete('/:id', validationJWT, controllerDeletePost);
module.exports = postRouter;
