const inventoryService = require("../services/inventoryService");

class InventoryController {
  async getInventory(req, res) {
    try {
      const inventory = await inventoryService.getInventory();
      res.json(inventory);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al obtener el inventario",
          error: error.message,
        });
    }
  }

  async updateInventory(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedInventory = await inventoryService.updateInventory(id, data);
      if (updatedInventory) {
        res.json(updatedInventory);
      } else {
        res.status(404).json({ message: "Inventario no encontrado" });
      }
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al actualizar el inventario",
          error: error.message,
        });
    }
  }

  async configureNotifications(req, res) {
    try {
      const result = await inventoryService.configureNotifications(req.body);
      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al configurar notificaciones",
          error: error.message,
        });
    }
  }

  async getLowStock(req, res) {
    try {
      const lowStock = await inventoryService.getLowStock();
      res.json(lowStock);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al obtener productos con bajo stock",
          error: error.message,
        });
    }
  }
}

module.exports = new InventoryController();
