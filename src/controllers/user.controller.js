const { serviceInsertUser } = require('../services/user.service');
const statusCodes = require('../helpers/statusCodes');
const serviceUser = require('../services/user.service');

const { Created } = statusCodes;
const { serviceGetAllUsers } = serviceUser;

const controllerSignUp = async (req, res) => {
  const token = await serviceInsertUser(req.body);

  res.status(Created).json({ token });
};

const controllerGetAllUsers = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllUsers();
  res.status(statusCode).json(message);
};

module.exports = {
  controllerSignUp,
  controllerGetAllUsers,
};