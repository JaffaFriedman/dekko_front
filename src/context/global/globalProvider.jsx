// HOC
/* eslint-disable react/prop-types */

import { GlobalContext } from './globalContext'
import { initMercadoPago } from '@mercadopago/sdk-react'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'
import { useState } from 'react'

export function GlobalProvider ({ children }) {
  const [familia, setFamilia] = useState({})
  const [categoria, setCategoria] = useState({})
  const [producto, setProducto] = useState({})
  const [tipoProducto, setTipoProducto] = useState('Tipo Producto')

 
  const [cantidad, setCantidad] = useState(0)
  const [userName, setUserName] = useState('MI PERFIL')

  initMercadoPago('TEST-ddb11d27-73ea-4298-9db7-260bf011c799')
  //const BACKEND_URL="https://uddjaffa.onrender.com"
  //const BACKEND_URL = 'http://localhost:8080'
  const BACKEND_URL = 'https://dekkoback-k4hg-dev.fl0.io'

  const redondear = num => {
    let roundedString = num.toFixed(2)
    let roundedNumber = parseFloat(roundedString)
    return roundedNumber
  }

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    width: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15
      },
      '& .MuiImageMarked-root': {
        opacity: 0.5
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor'
      }
    }
  }))

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  })

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  }))

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  }))

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }))

  const iniFamilia = () => {
    localStorage.removeItem('familia')
    localStorage.removeItem('categoria')
    localStorage.removeItem('tipoProducto')
    localStorage.removeItem('producto')
    localStorage.removeItem('familiaN')
    localStorage.removeItem('categoriaN')
    localStorage.removeItem('tipoProductoN')
    localStorage.removeItem('productoN')
  }
  const iniCategoria = () => {
    localStorage.removeItem('categoria')
    localStorage.removeItem('tipoProducto')
    localStorage.removeItem('producto')
    localStorage.removeItem('categoriaN')
    localStorage.removeItem('tipoProductoN')
    localStorage.removeItem('productoN')
  }
  const iniTipoProducto = () => {
    localStorage.removeItem('tipoProducto')
    localStorage.removeItem('producto')
    localStorage.removeItem('tipoProductoN')
    localStorage.removeItem('productoN')
  }
  const iniProducto = () => {
    localStorage.removeItem('producto')
    localStorage.removeItem('productoN')
  }

  const dondeEstoy = posicion => {

    switch (posicion) {
      case 'Home':
        iniFamilia()
        break
      case 'Familia':
        iniCategoria()
        break
      case 'Categoria':
        iniTipoProducto()
        break
      default:
        iniProducto()
    }
  }
  
  return (
    <GlobalContext.Provider
      value={{
        BACKEND_URL,
        ImageButton,
        ImageSrc,
        Image,
        ImageBackdrop,
        ImageMarked,
        familia,
        categoria,
        producto,
        tipoProducto,
        cantidad,
        userName,
        setUserName,
        setFamilia,
        setCategoria,
        setProducto,
        setTipoProducto,
        setCantidad,
        redondear,
        dondeEstoy,
        iniFamilia, iniCategoria,iniProducto,iniTipoProducto
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
