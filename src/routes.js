const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.post('/PwbsOs9YtfLi85clN8Sz', UserController.login);
routes.post('/NRBQlog6f2Pwnqe3adQJ', UserController.store);

routes.get('/OTT7RrH1TRC7Ypo2iYtR', ProductController.index);
routes.post('/C7Ypo2iFU0OTT7RrH1TR', ProductController.store);

module.exports = routes;