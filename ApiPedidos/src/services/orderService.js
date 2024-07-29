const orderRepository = require('../repositories/orderRepository');

// Servicio para crear un pedido
const createOrder = async (orderData) => {
  return await orderRepository.createOrder(orderData);
};

// Servicio para obtener un pedido por ID
const getOrder = async (id) => {
  return await orderRepository.getOrder(id);
};

// Servicio para obtener pedidos por usuario_id
const getOrders = async (usuario_id) => {
  return await orderRepository.getOrders(usuario_id);
};

// Servicio para actualizar el estado de un pedido
const updateOrderStatus = async (id, estado) => {
  await orderRepository.updateOrderStatus(id, estado);
};

// Servicio para crear un pago asociado a un pedido
const createPayment = async (id, paymentData) => {
  return await orderRepository.createPayment(id, paymentData);
};

module.exports = {
  createOrder,
  getOrder,
  getOrders,
  updateOrderStatus,
  createPayment,
};
