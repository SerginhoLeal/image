const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const SearchController = require('./controllers/SearchController');
const PastaController = require('./controllers/PastaController');
const PedidoController = require('./controllers/PedidoController');

const routes = express.Router();

routes.post('/PwbsOs9YtfLi85clN8Sz', UserController.login);
routes.post('/NRBQlog6f2Pwnqe3adQJ', UserController.store);

routes.get('/OTT7RrH1TRC7Ypo2iYtR', ProductController.index);
routes.post('/C7Ypo2iFU0OTT7RrH1TR', ProductController.store);

routes.get('/1TT75a8s5AS88aAo2iYtR', SearchController.index);
routes.get('/Ao1TT75a8s5AS88a2iYtR', SearchController.indexPerfil);

routes.get('/S881TT75a8s5AaAo2iYtR', PastaController.index);
routes.post('/C1TT75a8s5AOTT7RH1TR', PastaController.store);

routes.post('/AOTT7C1TT75a8s5RH1TR/:idProduct/skaoskao', PedidoController.store);

module.exports = routes;