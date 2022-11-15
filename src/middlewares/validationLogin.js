const { validate } = require('email-validator');
const { User } = require('../models');

const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const { BadRequest, Conflict } = statusCodes;
const { minimum8Characters, invalidEmail, minPassword6Characters,
  emailAlreadyExists } = errorMessages;

const loginValidation = async (req, res, next) => {
  const { email, password, displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(BadRequest).json({ message: minimum8Characters });
  }

  if (!validate(email)) {
    return res.status(BadRequest).json({ 
      message: invalidEmail });
  }

  if (password.length < 6) {
    return res.status(BadRequest).json({ 
      message: minPassword6Characters });
  }

  const user = await User.findOne({ where: { email } });
  if (user) {
    res.status(Conflict).json({ 
      message: emailAlreadyExists });
  }
  next();
};

module.exports = loginValidation;