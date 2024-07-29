## 4. Servicio de Pedidos

Este servicio gestiona la creación y seguimiento de pedidos.

### Endpoints:

- `POST /orders` - Crear un nuevo pedido
- `GET /orders/{id}` - Obtener detalles de un pedido
- `GET /orders` - Listar pedidos de un usuario
- `PUT /orders/{id}/status` - Actualizar estado de un pedido
- `POST /orders/{id}/payment` - Procesar pago de un pedido

### Atributos principales:

- Pedido: `id`, `usuario_id`, `items[]`, `total`, `estado`, `fecha_creación`, `fecha_actualización`
- Item del pedido: `producto_id`, `cantidad`, `precio_unitario`
- Pago: `id`, `pedido_id`, `monto`, `método_pago`, `estado`, `fecha_transacción`