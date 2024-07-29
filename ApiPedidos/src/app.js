const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

//Middleware para parsear JSON
app.use(express.json());

//Rutas para los pedidos
app.use('/orders', orderRoutes);

module.exports = app;
