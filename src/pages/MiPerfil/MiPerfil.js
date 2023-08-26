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
import { useContext, useState } from 'react'
import { UserContext } from '../../context/user/userContext'
import { types } from '../../context/user/userReducer'
import axios from 'axios'
export default function MiPerfil () {
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
    //baseURL: "https://uddjaffa.onrender.com:4000"
    baseURL: 'http://localhost:4000'
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log(formUser)
      const { data } = await api.post('/users', JSON.stringify(formUser), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatchUser({
        type: types.setUserState,
        payload: data
      })
      window.alert('Usuario actualizado')
    } catch (error) {
      window.alert('Error al actualizar usuario')
      console.log(error)
    }
  }
  const recuperaUsuario = async i => {
    let token = ''
    const dataToken = localStorage.getItem('token')
    if (dataToken) {
      token = JSON.parse(dataToken)
    }
    const dataI = localStorage.getItem('idUser')
    if (dataI) {
      i = JSON.parse(dataI)
    }
    window.alert(`/users/${i}`)
    try {
      const { data } = await api.get(`/users/${i}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      setFormUser(data.detail)

      console.log('data:', data)
      console.log('detail:', formUser)
      console.log('nombre:', formUser.nombre)
    } catch (error) {
      window.alert('Error al recuperar usuario')
      console.log(error)
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <AccountCircle />
        Mi Perfil
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
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <AccountCircle />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Mi Perfil
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
                <Button
                  variant='contained'
                  size='large'
                  startIcon={<SaveIcon />}
                  type='submit'
                  onClick={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {' '}
                  Actualizar
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={recuperaUsuario} href='/login'>
            Buscar
          </Button>
          <Button onClick={handleClose} href='/login'>
            Regresar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
