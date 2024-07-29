const sequelize = require('./config/database');
const app = require('./app');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error);
  }
}

startServer();