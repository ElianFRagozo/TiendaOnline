const inventoryRepository = require('../repositories/inventoryRepository');

class InventoryService {
  async getInventory() {
    return inventoryRepository.getAll();
  }

  async updateInventory(id, data) {
    return inventoryRepository.update(id, data);
  }

  async configureNotifications(config) {
    // Implementar lógica para configurar notificaciones
    return { message: 'Notificaciones configuradas', config };
  }

  async getLowStock() {
    return inventoryRepository.getLowStock();
  }
}

module.exports = new InventoryService();