const orderService = require('../services/orderService');

//Contolardor para crear un pedido
const createOrder = async (req, res) => {
  const { usuario_id, items, total, estado } = req.body;
  try {
    const id = await orderService.createOrder({ usuario_id, items, total, estado });
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Controlador para obtener un pedido por ID
const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await orderService.getOrder(id);
    if (!order) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Controlador para obtener pedidos por usuario_id
const getOrders = async (req, res) => {
  const { usuario_id } = req.query;
  try {
    const orders = await orderService.getOrders(usuario_id);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Controlador para actualizar el estado de un pedido
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  try {
    await orderService.updateOrderStatus(id, estado);
    res.json({ status: 'updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Controlador para crear un pago asociado a un pedido
const createPayment = async (req, res) => {
  const { id } = req.params;
  const { monto, metodo_pago, estado } = req.body;
  try {
    const paymentId = await orderService.createPayment(id, { monto, metodo_pago, estado });
    res.status(201).json({ id: paymentId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createOrder,
  getOrder,
  getOrders,
  updateOrderStatus,
  createPayment,
};
