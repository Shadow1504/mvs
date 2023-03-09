const express = require('express');
const route = express.Router()

const services = require('../service/render');
const controller = require('../controller/controller');
route.get('/', services.indRoutes);
route.get('/new',services.newRoutes);
route.get('/update',services.update);




route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
// route.get('/api/users/:name', controller.name);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;
