// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const inventoryRoutes = require('./routes/inventoryRoutes');
const swaggerConfig = require('./config/swagger');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', inventoryRoutes);

// Swagger
app.use('/api-docs', swaggerConfig.serve, swaggerConfig.setup);

// Error handling middleware
app.use(errorHandler);

module.exports = app;