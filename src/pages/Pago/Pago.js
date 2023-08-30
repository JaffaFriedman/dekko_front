import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import Typography from '@mui/material/Typography'
import PaymentIcon from '@mui/icons-material/Payment'
import Avatar from '@mui/material/Avatar'
import { useContext, useState } from 'react'
import axios from 'axios'
import { GlobalContext } from '../../context/global/globalContext'
import { ToastContainer, toast } from 'react-toastify'
import { CarritoContext } from '../../context/carrito/carritoContext'
export default function Pago () {
  const [open, setOpen] = React.useState(false)
  const { token, idUser, BACKEND_URL } = useContext(GlobalContext)
  const { carritoCompra } = useContext(CarritoContext)

  const handleClickOpen = () => {
    setOpen(true)
    if (idUser !== '') {
      recuperaUsuario(idUser)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
    nombre: '',
    rut: '',
    direccion: '',
    comuna: '',
    telefono: 0,
    rol: '',
    premium: false,
    dob: ''
  })

  const handleChange = e => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value
    })
  }
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  const api2 = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const handlePago = async e => {
    e.preventDefault()

    const items = carritoCompra.items.map(item => ({
      quantity: item.cantidad,
      description: item.glosa,
      unit_price: item.precio,
      title: item.glosa
    }))

    try {
      const { data } = await api2.post('/payment/create-payment', items)
      window.location.href = data.detail.response.init_point;
    } catch (error) {
      notifyError('Error al efectuar el pago')
      console.log(error)
    }
  }

  const recuperaUsuario = async () => {
    try {
      const { data } = await api.get(`/users/auth/${idUser}`)
      console.log(data)
      setFormUser(data.detail)
    } catch (error) {
      console.log(error)
    }
  }
  const notifyError = msg => toast.error(msg)
 // const notifySuccess = msg => toast.success(msg)

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <PaymentIcon fontSize='large' />
        Ingresar Datos de Despacho
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <ToastContainer position='top-center' />
        <DialogActions>
          <Button onClick={handleClose}>
            <CancelPresentationIcon color='primary' />
          </Button>
        </DialogActions>
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
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <PaymentIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Ingresa los Datos para el Despacho
              </Typography>

              <Box
                component='form'
                sx={{
                  '& > :not(style)': { mt: 1, width: '50ch' },
                  marginTop: 8
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='email'
                  value={formUser.email}
                  onChange={handleChange}
                  label='Correo electrónico'
                  variant='outlined'
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='nombre'
                  value={formUser.nombre}
                  label='Nombre'
                  onChange={handleChange}
                  variant='outlined'
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='rut'
                  value={formUser.rut}
                  onChange={handleChange}
                  label='Rut'
                  variant='outlined'
                />
              </Box>

              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='direccion'
                  label='Dirección'
                  value={formUser.direccion}
                  onChange={handleChange}
                  variant='outlined'
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='comuna'
                  onChange={handleChange}
                  value={formUser.comuna}
                  label='Comuna'
                  variant='outlined'
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='telefono'
                  onChange={handleChange}
                  label='Teléfono'
                  value={formUser.telefono}
                  variant='outlined'
                  type='number'
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '31ch' } }}
                noValidate
                autoComplete='off'
              >
                <Button onClick={handlePago} color='primary'>
                  <PaymentIcon color='primary' fontSize='large' />
                  Efectuar el pago
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  )
}
