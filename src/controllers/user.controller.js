const { serviceInsertUser } = require('../services/user.service');
const statusCodes = require('../helpers/statusCodes');
const serviceUser = require('../services/user.service');
const { verifyToken } = require('../auth/jsonWebToken');

const { Created } = statusCodes;
const { serviceGetAllUsers, serviceGetUserById } = serviceUser;

const controllerSignUp = async (req, res) => {
  const token = await serviceInsertUser(req.body);

  res.status(Created).json({ token });
};

const controllerGetAllUsers = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllUsers();
  res.status(statusCode).json(message);
};

const controllerGetUserById = async (req, res) => {
  const { id } = req.params;
  const { statusCode, message } = await serviceGetUserById(id);
  res.status(statusCode).json(message);
};

const controllerDeleteUser = async (req, res) => {
  const token = req.header('Authorization');
  const userId = verifyToken(token);

  const { statusCode, message } = await serviceUser.serviceDeleteUser(userId);

  res.status(statusCode).json(message);
};

module.exports = {
  controllerSignUp,
  controllerGetAllUsers,
  controllerGetUserById,
  controllerDeleteUser,
};