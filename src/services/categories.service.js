const { Category } = require('../models');

const statusCodes = require('../helpers/statusCodes');

const { Created, OK } = statusCodes;

const serviceAddNewCategorie = async (name) => {
  const { dataValues } = await Category.create({
    name,
  });

  return {
    statusCode: Created,
    message: dataValues,
  };
};

const serviceGetAllCategories = async () => {
  const allCategories = await Category.findAll();

  return {
    statusCode: OK,
    message: allCategories.map(({ dataValues }) => {
      const result = {
        id: dataValues.id,
        name: dataValues.name,
      }; 

      return result;
    }),
  };
};

module.exports = {
  serviceAddNewCategorie,
  serviceGetAllCategories,
};