const { User } = require('../models');
const { createToken } = require('../auth/jsonWebToken');
const statusCodes = require('../helpers/statusCodes');
const errorMessages = require('../helpers/errorMessages');

const { OK, NotFound } = statusCodes;
const { UserNotExist } = errorMessages;

const serviceInsertUser = async (body) => {
  const { displayName, email, password } = body;
  await User.create({ displayName, email, password });

  const user = await User.findOne({
    where: { email },
  });

  const token = createToken(user.id);
  return token;
};

const serviceGetAllUsers = async () => {
  const result = await User.findAll();

  return {
    statusCode: OK,
    message: result.map(({ dataValues }) => {
      const user = {
        id: dataValues.id,
        displayName: dataValues.displayName,
        email: dataValues.email,
        image: dataValues.image,
      }; 

      return user;
    }),
  };
};

const serviceGetUserById = async (id) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });

  if (!user) {
    return {
      statusCode: NotFound, 
      message: {
        message: UserNotExist,
      },
    };
  }

  return {
    statusCode: OK,
    message: user,
  };
};

module.exports = {
  serviceInsertUser,
  serviceGetAllUsers,
  serviceGetUserById,
};
