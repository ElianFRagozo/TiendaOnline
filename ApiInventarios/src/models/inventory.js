const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inventory = sequelize.define('Inventory', {
  producto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cantidad_disponible: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  cantidad_reservada: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  umbral_bajo_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10
  }
},
  {
    tableName: 'inventory', // Especifica el nombre exacto de la tabla
    timestamps: false
});

module.exports = Inventory;
