const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');
const { verifyToken } = require('../auth/jsonWebToken');

const { Unauthorized } = statusCodes;
const { tokenNotFound, expiredOrInvalidToken } = errorMessages;

const validationJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(Unauthorized).json({ message: tokenNotFound });
  }

  const userId = verifyToken(token);

  if (!userId) {
    return res.status(Unauthorized).json({ message: expiredOrInvalidToken });
  }

  req.body.userId = userId;

  next();
};

module.exports = validationJWT;