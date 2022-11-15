const { User } = require('../models');
const { createToken } = require('../auth/jsonWebToken');
const statusCodes = require('../helpers/statusCodes');

const { OK } = statusCodes;

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
      const user = dataValues;
      delete user.password;

      return user;
    }),
  };
};

module.exports = {
  serviceInsertUser,
  serviceGetAllUsers,
};
