const errorMessages = require('../helpers/errorMessages');
const statusCodes = require('../helpers/statusCodes');

const serviceCategories = require('../services/categories.service');

const { serviceAddNewCategorie } = serviceCategories;

const { BadRequest } = statusCodes;
const { nameIsRequired } = errorMessages;

const controllerAddNewCategorie = async (req, res) => {
  const { name } = req.body;
  const { statusCode, message } = await serviceAddNewCategorie(name);

  if (!name) {
    return res.status(BadRequest).json({ message: nameIsRequired });
  }

  return res.status(statusCode).json(message);
};

module.exports = {
  controllerAddNewCategorie,
};