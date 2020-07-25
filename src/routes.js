const express = require('express');

const authMiddleware = require("./middleware/auth");

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const PastaController = require('./controllers/PastaController');
const PedidoController = require('./controllers/PedidoController');

const routes = express.Router();

routes.post('/PwbsOs9YtfLi85clN8Sz', UserController.login);
routes.post('/NRBQlog6f2Pwnqe3adQJ', UserController.store);

routes.use(authMiddleware);

routes.get('/OTT7RR', UserController.index);
routes.get('/OTT7RrH1TRC7Ypo2iYtR', ProductController.index);
routes.post('/C7Ypo2iFU0OTT7RrH1TR', ProductController.store);

routes.get('/S881TT75a8s5AaAo2iYtR', PastaController.index);
routes.post('/C1TT75a8s5AOTT7RH1TR', PastaController.store);

routes.get('/Ao1TT75a8s5AS88a2iYtR', PedidoController.index);
routes.post('/AOTT7C1TT75a8s5RH1TR/:idProduct/skaoskao', PedidoController.store);
routes.post('/remove/:idRemove/skaoskao', PedidoController.store2);

module.exports = routes;