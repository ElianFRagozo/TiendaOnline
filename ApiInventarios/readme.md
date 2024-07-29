## 5. Servicio de Inventario

Este servicio maneja el seguimiento y actualización del inventario de productos.

### Endpoints:

- `GET /inventory` - Obtener niveles de inventario
- `PUT /inventory/{product_id}` - Actualizar nivel de inventario de un producto
- `POST /inventory/notifications` - Configurar notificaciones de bajo inventario
- `GET /inventory/low-stock` - Obtener productos con bajo stock

### Atributos principales:

- Inventario: `producto_id`, `cantidad_disponible`, `cantidad_reservada`, `umbral_bajo_stock`