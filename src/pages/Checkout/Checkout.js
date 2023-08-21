import { useContext } from 'react'
//import { CarritoContext } from '../../context/carrito/carritoContext'

//import * as React from 'react';

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { GlobalContext } from '../../context/global/globalContext'

export default function Checkout () {
  const { imagen,glosa } = useContext(GlobalContext)
 
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component='img' sx={{ width: 151 }} image={imagen} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {glosa}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
