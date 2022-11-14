const { User } = require('../models');
const { createToken } = require('../auth/validateJTS');

const controllerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await User.findOne({
    where: { email },
  });

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = createToken(user.id);
  res.status(200).json({ token });
};

module.exports = controllerLogin;