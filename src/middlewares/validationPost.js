const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const { BadRequest } = statusCodes;
const { requiredFields } = errorMessages;

const verifyCreatePost = (title, content, categoryIds) => title && content && categoryIds;
const verifyUpdatePost = (title, content) => title && content;

const postValidation = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if ((req.method === 'PUT' && verifyUpdatePost(title, content))
    || (req.method === 'POST' && verifyCreatePost(title, content, categoryIds))) {
    return next();
  }

  return res.status(BadRequest).json({ message: requiredFields });
};

module.exports = postValidation;