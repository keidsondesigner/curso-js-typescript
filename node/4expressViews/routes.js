const express = require('express');
const routes = express.Router();

const homeController = require('./src/controllers/homeController');
const usersController = require('./src/controllers/usersController');
const userController = require('./src/controllers/userController');
const productsController = require('./src/controllers/productsController');

//Rotas da Home
routes.get('/', homeController.pageHome);
routes.post('/', homeController.pageHomeFormTratado);

// Rotas de Users
routes.get('/users', usersController.users);

// Rota de User
routes.get('/user/:id', userController.user);

// Rota de Products com id opcional e outros params opcional
routes.get('/products/:id_product?/:params_opcional?', productsController.products);

module.exports = routes;
