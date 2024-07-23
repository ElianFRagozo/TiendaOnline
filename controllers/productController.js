const Product = require('../models/productModel');

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category_id, stock, image_url } = req.body;

    // Validar los campos requeridos
    if (!name || !price) {
      return res.status(400).json({ message: 'Nombre y precio son requeridos' });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      category_id,
      stock,
      image_url
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

// Actualizar un producto por ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      const { name, description, price, category_id, stock, image_url } = req.body;

      // Actualizar campos
      await product.update({
        name,
        description,
        price,
        category_id,
        stock,
        image_url
      });

      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

// Eliminar un producto por ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
