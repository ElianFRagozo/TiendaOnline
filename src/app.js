// app.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Utiliza el puerto de las variables de entorno o el puerto 3000 por defecto

// Importar rutas
const userRoutes = require('../routes/user/userRouter');
const productRoutes = require('../routes/product/productRouter');

// Middleware para parsear JSON
app.use(express.json());

// Usar rutas
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
