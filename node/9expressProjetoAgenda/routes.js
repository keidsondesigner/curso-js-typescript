const express = require('express');
const routes = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//Rotas da Home
routes.get('/', homeController.index);

//Rotas de Login
routes.get('/login/index', loginController.index);
routes.post('/login/register', loginController.register);

module.exports = routes;
