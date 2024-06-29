const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Configurar Sequelize con las variables de entorno
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false, // Puedes desactivar los logs de Sequelize si lo deseas
});

// Verificar la conexión inicial con Sequelize
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Salir del proceso con un código de error
  });

module.exports = sequelize;
