const { User } = require('../models');
const { createToken } = require('../auth/jsonWebToken');

const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const { BadRequest, OK } = statusCodes;
const { requiredFields, invalidFields } = errorMessages;

const controllerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(BadRequest).json({ message: requiredFields });
  }

  const user = await User.findOne({
    where: { email },
  });

  if (!user || user.password !== password) {
    return res.status(BadRequest).json({ message: invalidFields });
  }

  const token = createToken(user.id);
  res.status(OK).json({ token });
};

module.exports = controllerLogin;