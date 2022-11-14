const express = require('express');

const app = express();
const controllerLogin = require('./controllers/login.controller');
const loginValidation = require('./middlewares/validationLogin');
const controllerUser = require('./controllers/user.controller');

app.use(express.json());
app.post('/login', controllerLogin);
app.post('/user', loginValidation, controllerUser.signUp);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js.`
module.exports = app;
