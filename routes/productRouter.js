const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/autenticateToken');

// Obtener todos los productos
router.get('/', productController.getAllProducts);

// Obtener detalles de un producto específico
router.get('/:id', productController.getProductById);

// Crear un nuevo producto (requiere autenticación)
router.post('/', authMiddleware, productController.createProduct);

// Actualizar un producto existente (requiere autenticación)
router.put('/:id', authMiddleware, productController.updateProduct);

// Eliminar un producto
router.delete('/:id', productController.deleteProduct);

module.exports = router;
