const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const { BadRequest } = statusCodes;
const { requiredFields } = errorMessages;

const postValidation = async (req, res, next) => {
  const { title, content } = req.body;

  if (title && content) {
    return next();
  }

  return res.status(BadRequest).json({ message: requiredFields });
};

module.exports = postValidation;