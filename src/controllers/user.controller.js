const { serviceInsertUser } = require('../services/user.service');
const statusCodes = require('../helpers/statusCodes');

const { Created } = statusCodes;

const signUp = async (req, res) => {
  const token = await serviceInsertUser(req.body);
  res.status(Created).json({ token });
};

module.exports = {
  signUp,
};