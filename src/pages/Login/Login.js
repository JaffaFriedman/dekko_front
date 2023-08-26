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
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Olvido from '../../pages/Olvido/Olvido'
import Registro from '../../pages/Registro/Registro'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import jwtDecode from 'jwt-decode'
import Mensaje from '../../pages/Mensaje/Mensaje'
import { GlobalContext } from '../../context/global/globalContext'

export default function Login () {
  const {setVisible,setMensaje}  = useContext(GlobalContext);
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const despliegaMensaje = (m) => {
    setMensaje(m)
    setVisible(true)
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
      console.log(tokenDecodificado)
      dispatchUser({
        type: types.setUserState,
        payload: tokenDecodificado
      })
      despliegaMensaje( 'Bienvenido ' + tokenDecodificado.nombre)
    } catch (error) {
      console.log(error)
      despliegaMensaje('Error de conexion')
      dispatchUser({
        type: types.setError,
        payload: error
      })
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <AccountCircle color='primary' />
        {state?.user ? <p> {state.user.nombre}</p> : <p>Inicia sesión</p>}
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
                <AccountCircle />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Ingresa a tu cuenta
              </Typography>
              <Box
                component='form'
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
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
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Recordar la contraseña'
                />
                <Button
                  type='submit'
                  fullWidth
                  onClick={handleSubmit}
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ingresa a tu cuenta
                </Button>
                <Mensaje />

                <Grid container>
                  <Grid item xs>
                    <Olvido />
                  </Grid>
                  <Grid item>
                    <Registro />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
