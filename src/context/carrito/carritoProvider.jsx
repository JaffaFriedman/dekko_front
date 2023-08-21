// HOC
/* eslint-disable react/prop-types */
import { useReducer } from 'react'
import { CarritoContext } from './carritoContext'
import carritoReducer from './carritoReducer'

const initialState = {
  items: [],
  totalProductos: 0,
  precioTotal: 0
};

 
export const CarritoProvider = ({ children }) => {
  let [carritoCompra, dispatch] = useReducer(carritoReducer, initialState)
  return (
    <CarritoContext.Provider value={{carritoCompra, dispatch}}>
      {children}
    </CarritoContext.Provider>
  )
}
