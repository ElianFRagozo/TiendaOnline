const express = require('express');
const bodyParser = require('body-parser');
const orderController = require('../controllers/orderController');

const router = express.Router();

// Aplicar body-parser solo a rutas que necesiten analizar JSON
router.use(bodyParser.json());

//Ruta para crear un pedido
router.post('/', orderController.createOrder);

//Ruta para obtener un pedido por ID
router.get('/:id', orderController.getOrder);

//Ruta para obtener pedidos por usuario_id
router.get('/', orderController.getOrders);

//Ruta para actualizar el estado de un pedido
router.put('/:id/status', orderController.updateOrderStatus);

//Ruta para crear un pago asociado a un pedido
router.post('/:id/payment', orderController.createPayment);

module.exports = router;
