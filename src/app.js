const express = require('express');

const app = express();
const controllerLogin = require('./controllers/login.controller');

app.use(express.json());
app.post('/login', controllerLogin);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js.`
module.exports = app;
