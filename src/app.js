// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// Importar la ruta de movies
const moviesRoutes = require('../routes/movieRoutes');


app.use(express.json());
// Usar la ruta para películas
app.use('/movies', moviesRoutes);

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});