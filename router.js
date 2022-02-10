const express = require('express')
const route = express.Router()
const controller = require('./controller');

/* @description Root Route
    @method GET */

// route.get('/',controller.helloworld);




//API
route.post('/api/appointments',controller.create);
route.get('/api/appointments',controller.find);
route.post('/api/doctors',controller.createDoctors);
route.get('/api/doctors',controller.findDoctors);
// route.get('/api/sales',controller.findSales);
// route.put('/api/products/:id',controller.update);
// route.put('/api/sales/:id',controller.updateSales);
// route.delete('/api/products/:id',controller.delete);

module.exports = route