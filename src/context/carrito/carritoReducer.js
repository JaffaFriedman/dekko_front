const carritoReducer = (estado, accion) => {
  switch (accion.type) {
    case 'AGREGAR':
      return {
        ...estado,
        productos: [
          ...estado.productos,
          {
            producto: accion.producto,
            cantidad: accion.cantidad,
            precio: accion.precio,
            ancho: accion.ancho,
            alto: accion.alto
          }
        ]
      }
    // Puedes agregar más casos aquí para otras acciones
    default:
      return estado
  }
}
export default carritoReducer;