import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PaymentIcon from '@mui/icons-material/Payment'
import Avatar from '@mui/material/Avatar'

import { useContext } from 'react'
import { UserContext } from '../../context/user/userContext'
import { CarritoContext } from '../../context/carrito/carritoContext'

export default function Pago () {
  const [open, setOpen] = React.useState(false)
  const { carritoCompra } = useContext(CarritoContext)
  const options = { style: 'currency', currency: 'CLP' }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = () => {
    setOpen(false)
  }
  const [state, dispatchUser] = useContext(UserContext)

  const handleChange = e => {
    dispatchUser({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <PaymentIcon />
        Pago
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container component='main' maxWidth='xs' className='text-center'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <h4>Productos: {carritoCompra.totalProductos}</h4>
              <h4>
                Total:{' '}
                {parseFloat(
                  carritoCompra.precioTotal.toFixed(0)
                ).toLocaleString('es-CL', options)}
              </h4>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <PaymentIcon />
              </Avatar>
              <Typography component='h1' variant='h5' margin={3}>
                Dirección de Envío
              </Typography>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': { mt: 1, width: '50ch' },
                  marginTop: 2
                }}
                noValidate
              >
                <TextField
                  name='email'
                  onChange={handleChange}
                  label='Correo electrónico'
                  variant='outlined'
                  value={state.email}
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
              ></Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
              >
                <TextField
                  id='nombre'
                  label='Nombre'
                  onChange={handleChange}
                  variant='outlined'
                  value={state.nombre}
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
              >
                <TextField
                  name='direccion'
                  label='Dirección'
                  onChange={handleChange}
                  variant='outlined'
                  value={state.direccion}
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
              >
                <TextField
                  name='comuna'
                  onChange={handleChange}
                  label='Comuna'
                  variant='outlined'
                  value={state.Avatarcomuna}
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
              >
                <TextField
                  name='telefono'
                  onChange={handleChange}
                  label='Teléfono'
                  variant='outlined'
                  type='number'
                  value={state.telefono}
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '31ch' } }}
                noValidate
              >
                <Button
                  variant='contained'
                  size='large'
                  startIcon={<PaymentIcon />}
                  type='submit'
                  onClick={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {' '}
                  Pagar
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} href='/login'>
            Regresar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
