const express = require('express');

const app = express();

const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');
const categoriesRouter = require('./routes/categories.router');

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js.`
module.exports = app;
