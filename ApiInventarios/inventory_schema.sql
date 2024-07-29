-- Crear la base de datos
CREATE DATABASE inventory_db;

-- Conectar a la base de datos
\c inventory_db

-- Crear la tabla de inventario
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    cantidad_disponible INTEGER NOT NULL DEFAULT 0,
    cantidad_reservada INTEGER NOT NULL DEFAULT 0,
    umbral_bajo_stock INTEGER NOT NULL DEFAULT 10,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Crear índice para búsquedas rápidas por producto_id
CREATE INDEX idx_inventory_producto_id ON inventory(producto_id);

-- Crear función para actualizar el timestamp de updated_at
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear trigger para actualizar automáticamente updated_at
CREATE TRIGGER update_inventory_modtime
BEFORE UPDATE ON inventory
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Opcionalmente, insertar algunos datos de ejemplo
INSERT INTO inventory (producto_id, cantidad_disponible, cantidad_reservada, umbral_bajo_stock)
VALUES 
(1, 100, 10, 20),
(2, 50, 5, 15),
(3, 200, 0, 30);
