const { serviceGetAllPosts } = require('../services/post.service');

const controllerGetAllPosts = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllPosts();
  res.status(statusCode).json(message);
};

module.exports = {
  controllerGetAllPosts,
};