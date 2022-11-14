const { serviceInsertUser } = require('../services/user.service');

const signUp = async (req, res) => {
  const token = await serviceInsertUser(req.body);
  res.status(201).json({ token });
};

module.exports = {
  signUp,
};