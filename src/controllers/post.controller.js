const {
  serviceGetAllPosts,
  serviceGetPostById,
  serviceUpdatePost,
  serviceDeletePost,
  serviceInsertPost,
} = require('../services/post.service');

const controllerGetAllPosts = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllPosts();
  res.status(statusCode).json(message);
};

const controllerGetPostById = async (req, res) => {
  const { id } = req.params;
  const { statusCode, message } = await serviceGetPostById(id);
  res.status(statusCode).json(message);
};

const controllerUpdatePost = async (req, res) => {
  const { title, content, userId } = req.body;
  const { id } = req.params;
  const { statusCode, message } = await serviceUpdatePost({ title, content }, id, userId);
  res.status(statusCode).json(message);
};

const controllerDeletePost = async (req, res) => {
  const { id: postId } = req.params;
  const { userId } = req.body;

  const { statusCode, message } = await serviceDeletePost(userId, postId);

  res.status(statusCode).json(message);
};

const controllerInsertPost = async (req, res) => {
  const { title, content, userId, categoryIds } = req.body;
  const { statusCode, message } = await serviceInsertPost({ title, content, categoryIds }, userId);
  res.status(statusCode).json(message);
};

module.exports = {
  controllerGetAllPosts,
  controllerGetPostById,
  controllerUpdatePost,
  controllerDeletePost,
  controllerInsertPost,
};