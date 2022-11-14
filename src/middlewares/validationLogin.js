const { validate } = require('email-validator');
const { User } = require('../models');

const loginValidation = async (req, res, next) => {
  const { email, password, displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }

  if (!validate(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }

  const user = await User.findOne({ where: { email } });
  if (user) {
    res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = loginValidation;