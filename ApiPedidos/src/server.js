require('dotenv').config(); //Carga las variables de entorno desde el archivo .env
const app = require('./app');

const port = process.env.PORT || 3000;// Define el puerto desde la variable de entorno o usa 3000 por defecto

// Inicia el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
