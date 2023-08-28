import * as React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/user/userContext'
import { types } from '../../context/user/userReducer'
import axios from 'axios'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AccountCircle from '@mui/icons-material/AccountCircle'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import jwtDecode from 'jwt-decode'
import LoginIcon from '@mui/icons-material/Login'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { GlobalContext } from '../../context/global/globalContext'
import { ToastContainer, toast } from 'react-toastify'
import Registro from '../../pages/Registro/Registro'

import 'react-toastify/dist/ReactToastify.css'

export default function Login () {
  const { userName, setUserName, setToken, setIdUser } =
    useContext(GlobalContext)
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

  const [state, dispatchUser] = useContext(UserContext)

  const initialUser = {
    name: 'ACCEDER',
    email: '',
    password: ''
  }

  const [formUser, setFormUser] = useState(initialUser)

  const handleChange = e => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value
    })
  }

  let tokenDecodificado = {}
  const api = axios.create({
    //baseURL: 'https://uddjaffa.onrender.com'
    baseURL: 'http://localhost:4000'
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await api.post('/users/login', formUser, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      tokenDecodificado = jwtDecode(data.token)
      setToken(data.token)
      setIdUser(data.idUser)
      setUserName(tokenDecodificado.nombre)

      dispatchUser({
        type: types.setUserState,
        payload: tokenDecodificado
      })
      notifySuccess('Usuario Conectado')
    } catch (error) {
      notifyError('Error de conexion')
      setToken('')
      setIdUser('')
      setUserName('Inicio Sesión')
      dispatchUser({
        type: types.setError,
        payload: error
      })
      console.log(error)
    }
  }
  const notifyError = msg => toast.error(msg)
  const notifySuccess = msg => toast.success(msg)

  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <AccountCircle color='primary' fontSize='large' />
        {userName}
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
                marginTop: 4,
                marginBottom: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                <AccountCircle />
              </Avatar>

              <Typography component='h1' variant='h5'>
                {state?.user ? (
                  <p> {state.user.nombre}</p>
                ) : (
                  <p>Inicia sesión</p>
                )}
              </Typography>
              <Typography component='h1' variant='h5'>
                {state?.user ? (
                  <p> ¡Qué bueno tenerte de vuelta! </p>
                ) : (
                  
                  <React.Fragment>
                    <Registro />
                  </React.Fragment>
                )}
              </Typography>

              <Box
                component='form'
                onSubmit={handleSubmit}
                noValidate
                sx={{ marginTop: 4, marginBottom: 4 }}
              >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Correo electrónico'
                  name='email'
                  onChange={handleChange}
                  autoComplete='email'
                  autoFocus
                />
                <FormControl sx={{ width: '50ch' }} variant='outlined'>
                  <InputLabel htmlFor='outlined-adornment-password'>
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
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
                <Grid container sx={{ marginTop: 4 }}>
                  <Grid item xs>
                    <Button onClick={handleSubmit} color='primary'>
                      <LoginIcon color='primary' fontSize='large' />
                      Ingresa a tu cuenta
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  )
}
