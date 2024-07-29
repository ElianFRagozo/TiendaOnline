const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

/**
 * @swagger
 * /api/inventory:
 *   get:
 *     summary: Obtiene todos los registros de inventario
 *     responses:
 *       200:
 *         description: Lista de registros de inventario
 */
router.get('/inventory', inventoryController.getInventory);

/**
 * @swagger
 * /api/inventory/{id}:
 *   put:
 *     summary: Actualiza un registro de inventario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad_disponible:
 *                 type: integer
 *               cantidad_reservada:
 *                 type: integer
 *               umbral_bajo_stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Registro de inventario actualizado
 */
router.put('/inventory/:id', inventoryController.updateInventory);

/**
 * @swagger
 * /api/inventory/notifications:
 *   post:
 *     summary: Configura notificaciones de bajo inventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notificaciones configuradas
 */
router.post('/inventory/notifications', inventoryController.configureNotifications);

/**
 * @swagger
 * /api/inventory/low-stock:
 *   get:
 *     summary: Obtiene productos con bajo stock
 *     responses:
 *       200:
 *         description: Lista de productos con bajo stock
 */
router.get('/inventory/low-stock', inventoryController.getLowStock);

module.exports = router;