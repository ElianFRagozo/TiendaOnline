// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const userRoutes = require('../routes/user/userRouter');
const productRoutes = require('../routes/product/productRouter');
// Importar la ruta de movies



app.use(express.json()); // Middleware para parsear JSON

app.use('/users', userRoutes);
app.use('/products', productRoutes);


// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});