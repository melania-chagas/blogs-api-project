const { Category } = require('../models');

const statusCodes = require('../helpers/statusCodes');

const { Created } = statusCodes;

const serviceAddNewCategorie = async (name) => {
  const { dataValues } = await Category.create({
    name,
  });

  return {
    statusCode: Created,
    message: dataValues,
  };
};

module.exports = {
  serviceAddNewCategorie,
};