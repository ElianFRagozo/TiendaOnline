const { Sequelize } = require('sequelize');
const Inventory = require('../models/inventory');

class InventoryRepository {
  async getAll() {
    try {
      return await Inventory.findAll();
    } catch (error) {
      throw new Error('Error al obtener todos los registros de inventario: ' + error.message);
    }
  }

  async getById(id) {
    try {
      return await Inventory.findByPk(id);
    } catch (error) {
      throw new Error('Error al obtener el registro de inventario por ID: ' + error.message);
    }
  }

  async update(id, data) {
    try {
      const inventory = await Inventory.findByPk(id);
      if (inventory) {
        return await inventory.update(data);
      }
      return null;
    } catch (error) {
      throw new Error('Error al actualizar el inventario: ' + error.message);
    }
  }

  async getLowStock() {
    try {
      return await Inventory.findAll({
        where: {
          cantidad_disponible: {
            [Sequelize.Op.lt]: Sequelize.col('umbral_bajo_stock')
          }
        }
      });
    } catch (error) {
      throw new Error('Error al obtener productos con bajo stock: ' + error.message);
    }
  }
}

module.exports = new InventoryRepository();
