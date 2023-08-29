import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import SaveIcon from '@mui/icons-material/Save'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/user/userContext'
import { types } from '../../context/user/userReducer'
import axios from 'axios'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { ToastContainer, toast } from 'react-toastify'
import { GlobalContext } from '../../context/global/globalContext'

export default function Registro () {
  const {
    BACKEND_URL
  } = useContext(GlobalContext)


  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [, dispatchUser] = useContext(UserContext)

  const initialUser = {
    email: '',
    password: '',
    nombre: '',
    rut: '',
    direccion: '',
    comuna: '',
    telefono: ''
  }
  const [formUser, setFormUser] = useState(initialUser)

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
    }
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log(formUser)
      const { data } = await api.post('/users', JSON.stringify(formUser))
      dispatchUser({
        type: types.setUserState,
        payload: data
      })
      notifySuccess('Usuario registrado')
    } catch (error) {
      notifyError('Error al registrar usuario')
      console.log(error)
    }
  }
  const notifyError = msg => toast.error(msg)
  const notifySuccess = msg => toast.success(msg)

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <AccountCircle fontSize='large' />
        Si no tienes cuenta registrate aqui
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
                <AccountCircle />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Crea tu cuenta
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
                  onChange={handleChange}
                  label='Correo electrónico'
                  variant='outlined'
                />
                <FormControl sx={{ mt: 1, width: '50ch' }} variant='outlined'>
                  <InputLabel htmlFor='password'>Contraseña</InputLabel>
                  <OutlinedInput
                    name='password'
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label='Contraseña'
                  />
                </FormControl>
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='nombre'
                  onChange={handleChange}
                  label='Nombre'
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
                <Button onClick={handleSubmit} color='primary'>
                  <SaveIcon color='primary' fontSize='large' />
                  Registrar
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  )
}
