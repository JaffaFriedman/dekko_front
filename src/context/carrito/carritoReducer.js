
const carritoReducer= ( state, action = {}) => {
  let carritoActualizado;
  switch (action.type) {
    case 'AGREGAR_ITEM':
      carritoActualizado = [...state.items, action.item]
      break
    case 'MODIFICAR_CANTIDAD':
      carritoActualizado = state.items.map((item, index) => {
        if (index !== action.indice) return item
        return { ...item, cantidad: action.nuevaCantidad }
      })
      break
    case 'ELIMINAR_ITEM':
      carritoActualizado = state.items.filter(
        (_, index) => index !== action.indice
      )
      break
    default:
      carritoActualizado =  state
  }

  const totalProductos = carritoActualizado.reduce(
    (total, item) => total + item.cantidad,
    0
  )
  const precioTotal = carritoActualizado.reduce(
    (total, item) => total + item.cantidad * item.precio,
    0
  )

  return {
    items: carritoActualizado,
    totalProductos,
    precioTotal
  }
}
export default carritoReducer
