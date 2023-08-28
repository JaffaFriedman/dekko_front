// HOC
/* eslint-disable react/prop-types */
import * as React from 'react'
import { GlobalContext } from './globalContext'
import { initMercadoPago } from '@mercadopago/sdk-react'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'

export function GlobalProvider ({ children }) {
  const [familia, setFamilia] = React.useState({})
  const [categoria, setCategoria] = React.useState({})
  const [producto, setProducto] = React.useState({})
  const [alto, setAlto] = React.useState('100')
  const [ancho, setAncho] = React.useState('100')
  const [mt2, setMt2] = React.useState(1)
  const [precio, setPrecio] = React.useState(0)
  const [precioMt2, setPrecioMt2] = React.useState(0)
  const [glosa, setGlosa] = React.useState('')
  const [cantidad, setCantidad] = React.useState(0)
  const [imagen, setImagen] = React.useState('')
  const [userName, setUserName] = React.useState('Inicia Sesión')
  const [idUser, setIdUser] = React.useState('')
  const [token, setToken] = React.useState('')

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
  initMercadoPago('TEST-ddb11d27-73ea-4298-9db7-260bf011c799')

  return (
    <GlobalContext.Provider
      value={{
        ImageButton,
        ImageSrc,
        Image,
        ImageBackdrop,
        ImageMarked,
        idUser,
        setIdUser,
        token,
        setToken,
        familia,
        categoria,
        producto,
        cantidad,
        alto,
        ancho,
        mt2,
        precioMt2,
        precio,
        glosa,
        imagen,
        userName,
        setUserName,
        setImagen,
        setFamilia,
        setCategoria,
        setProducto,
        setCantidad,
        setAlto,
        setAncho,
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
