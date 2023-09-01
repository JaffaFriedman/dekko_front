// HOC
/* eslint-disable react/prop-types */

import { GlobalContext } from './globalContext'
import { initMercadoPago } from '@mercadopago/sdk-react'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'
import { useState } from 'react'


export function GlobalProvider ({ children }) {

  const [cantidad, setCantidad] = useState(0)
  const [userName, setUserName] = useState( 'MI PERFIL')
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

  initMercadoPago('TEST-ddb11d27-73ea-4298-9db7-260bf011c799')
  //const BACKEND_URL="https://uddjaffa.onrender.com"
  //const BACKEND_URL = 'http://localhost:8080'
  const BACKEND_URL="https://dekkoback-k4hg-dev.fl0.io"

  return (
    <GlobalContext.Provider
      value={{
        BACKEND_URL,
        ImageButton,
        ImageSrc,
        Image,
        ImageBackdrop,
        ImageMarked,
        cantidad,
        userName,
        setUserName,
        setCantidad,
        redondear
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
