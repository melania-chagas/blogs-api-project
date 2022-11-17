const errorMessages = require('../helpers/errorMessages');
const statusCodes = require('../helpers/statusCodes');

const { BadRequest } = statusCodes;
const { nameIsRequired } = errorMessages;

const serviceCategories = require('../services/categories.service');

const { serviceAddNewCategorie, serviceGetAllCategories } = serviceCategories;

const controllerAddNewCategorie = async (req, res) => {
  const { name } = req.body;
  const { statusCode, message } = await serviceAddNewCategorie(name);

  if (!name) {
    return res.status(BadRequest).json({ message: nameIsRequired });
  }

  return res.status(statusCode).json(message);
};

const controllerGetAllCategories = async (_req, res) => {
  const { statusCode, message } = await serviceGetAllCategories();
  res.status(statusCode).json(message);
};

module.exports = {
  controllerAddNewCategorie,
  controllerGetAllCategories,
};