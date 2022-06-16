const express = require('express');
const routes = express.Router();

const homeController = require('./src/controllers/homeController');

//Rotas da Home
routes.get('/', homeController.pageHome);
routes.post('/', homeController.pageHomeFormTratado);


module.exports = routes;
