// HOC
/* eslint-disable react/prop-types */
import * as React from 'react'
import { GlobalContext } from './globalContext'

export function GlobalProvider ({ children }) {
  const [familia, setFamilia] = React.useState({})
  const [categoria, setCategoria] = React.useState({})
  const [producto, setProducto] = React.useState('')
  const [cantidad, setCantidad] = React.useState(1)
  const [mensaje, setMensaje] = React.useState('')
  const [alto, setAlto] = React.useState('100')
  const [ancho, setAncho] = React.useState('100')
  const [mt2, setMt2] = React.useState(1)
  const [precio, setPrecio] = React.useState(0)
  const [precioMt2, setPrecioMt2] = React.useState(0)
  const [glosa, setGlosa] = React.useState('')
  const [cantidadCarro, setCantidadCarro] = React.useState(0)
  const [precioCarro, setPrecioCarro] = React.useState(0)
  const [visible, setVisible] = React.useState(false)
  let [carrito, setCarrito] = React.useState([])
  
  const agregarItemCarrito = (
     ) => {
    if (carrito === null) carrito = []
    const itemCarrito = {
      glosa: glosa,
      cantidad: cantidad,
      precio: precio 
    }
    setCarrito(carrito.push(itemCarrito))
    setCantidadCarro(cantidadCarro+cantidad)
  }

  const eliminarItemCarrito = (idx) =>{
    carrito.splice(idx,1)
}

  return (    
    <GlobalContext.Provider
      value={{
        familia,
        categoria,
        producto,
        cantidad,
        mensaje,
        alto,
        ancho,
        cantidadCarro,
        precioCarro,
        carrito,
        visible,
        mt2,
        precioMt2,
        precio,
        glosa,
        setFamilia,
        setCategoria,
        setProducto,
        setCantidad,
        setMensaje,
        setAlto,
        setAncho,
        setCantidadCarro,
        setPrecioCarro,
        setCarrito,
        setVisible,
        setMt2,
        setPrecioMt2,
        setPrecio,
        agregarItemCarrito,
        eliminarItemCarrito,
        setGlosa
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
