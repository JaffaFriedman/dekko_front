import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import { CarritoContext } from '../../context/carrito/carritoContext'
import { useNavigate } from 'react-router-dom'
export default function Agregarcarro () {
  const { imagen, glosa, cantidad, precio } = useContext(GlobalContext)
  const options = { style: 'currency', currency: 'CLP' }
  const [open, setOpen] = React.useState(false)

  const { dispatchCarrito } = useContext(CarritoContext)

  const handleClickOpen = () => {
    setOpen(true)
    const item = {
      imagen,
      glosa,
      cantidad,
      precio,
    }
    dispatchCarrito({ type: 'AGREGAR_ITEM', item })
  }
  const navigate = useNavigate()
  const handleClose = () => {
    setOpen(false)
    navigate('/Productos')
  }
  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <ShoppingCartIcon color='primary' />
        Agregar al Carro
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container component='main' maxWidth='xs' className='text-center'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                marginBottom: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                <ShoppingCartIcon />
              </Avatar>
              <h5>Producto agregado al carro</h5>
              <p>Cantidad: {cantidad} </p>
              <img
                className='d-block w-100 image-responsive justify-content-center '
                src={imagen}
              />
              <p>Producto: {glosa} </p>
              <p>
                Precio Unitario:
                {parseFloat(precio.toFixed(0)).toLocaleString(
                  'es-CL',
                  options
                )}{' '}
              </p>
              <p>
                Precio Total:
                {parseFloat((precio * cantidad).toFixed(0)).toLocaleString(
                  'es-CL',
                  options
                )}{' '}
              </p>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Volver</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
