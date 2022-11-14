const { User } = require('../models');
const { createToken } = require('../auth/validateJTW');

const serviceInsertUser = async (body) => {
  const { displayName, email, password } = body;
  await User.create({ displayName, email, password });

  const user = await User.findOne({
    where: { email },
  });

  const token = createToken(user.id);
  return token;
};

module.exports = {
  serviceInsertUser,
};
