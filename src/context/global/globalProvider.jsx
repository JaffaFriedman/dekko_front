// HOC
/* eslint-disable react/prop-types */
import * as React from 'react'
import { GlobalContext } from './globalContext'

export function GlobalProvider ({ children }) {
  const [familia, setFamilia] = React.useState({})
  const [categoria, setCategoria] = React.useState({})
  const [producto, setProducto] = React.useState({})

  const [mensaje, setMensaje] = React.useState('')
  const [alto, setAlto] = React.useState('100')
  const [ancho, setAncho] = React.useState('100')
  const [mt2, setMt2] = React.useState(1)
  const [precio, setPrecio] = React.useState(0)
  const [precioMt2, setPrecioMt2] = React.useState(0)
  const [glosa, setGlosa] = React.useState('')
  const [cantidad, setCantidad] = React.useState(0)
  const [visible, setVisible] = React.useState(false)
  const [imagen, setImagen] = React.useState('')


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
        visible,
        mt2,
        precioMt2,
        precio,
        glosa,
        imagen,
        setImagen,
        setFamilia,
        setCategoria,
        setProducto,
        setCantidad,
        setMensaje,
        setAlto,
        setAncho,
        setVisible,
        setMt2,
        setPrecioMt2,
        setPrecio,
        setGlosa
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
