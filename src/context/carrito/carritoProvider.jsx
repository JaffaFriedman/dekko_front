// HOC
/* eslint-disable react/prop-types */
import { useReducer } from 'react'
import { CarritoContext } from './carritoContext'
import carritoReducer from './carritoReducer'

export const CarritoProvider = ({ children }) => {
  let [carritoCompra, dispatch] = useReducer(carritoReducer, { productos: [] })
  return (
    <CarritoContext.Provider value={[carritoCompra, dispatch]}>
      {children}
    </CarritoContext.Provider>
  )
}
