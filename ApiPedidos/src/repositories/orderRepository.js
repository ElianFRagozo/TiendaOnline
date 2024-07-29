const { Pool } = require('pg');

// Configuración de la conexión a la base de datos usando variables de entorno
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Función para crear un pedido en la base de datos
const createOrder = async ({ usuario_id, items, total, estado }) => {
  const result = await pool.query(
    'INSERT INTO pedidos (usuario_id, items, total, estado) VALUES ($1, $2, $3, $4) RETURNING id',
    [usuario_id, JSON.stringify(items), total, estado]
  );
  return result.rows[0].id;
};

// Función para obtener un pedido por ID
const getOrder = async (id) => {
  const result = await pool.query('SELECT * FROM pedidos WHERE id = $1', [id]);
  return result.rows[0];
};


// Función para obtener pedidos por usuario_id
const getOrders = async (usuario_id) => {
  const result = await pool.query('SELECT * FROM pedidos WHERE usuario_id = $1', [usuario_id]);
  return result.rows;
};

// Función para actualizar el estado de un pedido
const updateOrderStatus = async (id, estado) => {
  await pool.query(
    'UPDATE pedidos SET estado = $1, fecha_actualizacion = CURRENT_TIMESTAMP WHERE id = $2',
    [estado, id]
  );
};

// Función para crear un pago asociado a un pedido
const createPayment = async (pedido_id, { monto, metodo_pago, estado }) => {
  const result = await pool.query(
    'INSERT INTO pagos (pedido_id, monto, metodo_pago, estado) VALUES ($1, $2, $3, $4) RETURNING id',
    [pedido_id, monto, metodo_pago, estado]
  );
  return result.rows[0].id;
};

module.exports = {
  createOrder,
  getOrder,
  getOrders,
  updateOrderStatus,
  createPayment,
};
