import { useContext, useState } from 'react'
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
import { UserContext } from '../../context/user/userContext'
import { types } from '../../context/user/userReducer'
import axios from 'axios'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { ToastContainer, toast } from 'react-toastify'
import { GlobalContext } from '../../context/global/globalContext'

export default function Prueba () {
  const { BACKEND_URL } = useContext(GlobalContext)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const [open, setOpen] = useState(false)
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
  const [formDatos, setformDatos] = useState(initialUser)
  
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!e) {
      setEmailError('Campo requerido');
    } else if (!emailRegex.test(e)) {
      setEmailError('Correo electrónico no válido');
    } else {
      setEmailError('');
    }
  };
  
 
const [passwordError, setPasswordError] = useState('')
const validatePassword = e => {
  if (!e) {
    setPasswordError('Campo requerido')
  } else if (e.length < 8) {
    setPasswordError('La clave debe tener al menos 8 caracteres')
  } else if (
    !/[a-z]/.test(e) ||
    !/[A-Z]/.test(e) ||
    !/[0-9]/.test(e)
  ) {
    setPasswordError(
      'La clave debe contener letras, números, al menos una mayúscula y una minúscula'
    )
  } else {
    setPasswordError('')
  }
}


const [direccionError, setDireccionError] = useState('')
const validateDireccion = e => {
  if (!e) {
    setDireccionError('Campo requerido')
  } else if (e.length < 2 || e.length > 50) {
    setDireccionError('La dirección debe tener entre 2 y 50 caracteres')
  } else if (!/^[a-zA-Z\d\s-'´]+$/i.test(e)) {
    setDireccionError(
      'La dirección solo debe contener letras, números, espacios, guiones y apóstrofes'
    )
  } else {
    setDireccionError('')
  }
}


const [nombreError, setNombreError] = useState('')
const validateNombre = e => {
  if (!e) {
    setNombreError('Campo requerido')
  } else if (e.length < 2 || e.length > 50) {
    setNombreError('El nombre debe tener entre 2 y 50 caracteres')
  } else if (!/^[a-zA-Z\s-'´]+$/i.test(e)) {
    setNombreError(
      'El nombre solo debe contener letras, espacios, guiones y apóstrofes'
    )
  } else {
    setNombreError('')
  }
}

const [comunaError, setComunaError] = useState('')
const validateComuna = e => {
  if (!e) {
    setComunaError('Campo requerido')
  } else if (e.length < 2 || e.length > 50) {
    setComunaError('La comuna  debe tener entre 2 y 50 caracteres')
  } else if (!/^[a-zA-Z\s-'´]+$/i.test(e)) {
    setComunaError(
      'La comuna solo debe contener letras, espacios, guiones y apóstrofes'
    )
  } else {
    setComunaError('')
  }
}

const [telefonoError, setTelefonoError] = useState('')
const validateTelefono = e => {
  if (!e) {
    setTelefonoError('Campo requerido');
  } else if (!/^\d{8}$/.test(e)) {
    setTelefonoError('Formato de teléfono no válido');
  } else {
    setTelefonoError('');
  }
}


const [rutError, setRutError] = useState('')
function validateRut(rut) {
  const cleanRUT = rut.replace(/[.-]/g, '').toUpperCase()
  const rutBody = parseInt(cleanRUT.slice(0, -1), 10)
  const dv = cleanRUT.slice(-1)
  if (isNaN(rutBody)) return false
  if (cleanRUT.length < 2) return false
 let m = 0
  let s = 1
  let bodyValue = rutBody
  while (bodyValue > 0) {
    s = (s + (bodyValue % 10) * (9 - (m++ % 6))) % 11
    bodyValue = Math.floor(bodyValue / 10)
  }
  const calculatedDV = s > 0 ? s - 1 + '' : 'K'
  if( dv !== calculatedDV) setRutError('Rut inválido')
  else setRutError('')
}


  const handleChange = e => {
    if (e.target.name === 'email') {
      validateEmail(e.target.value)
      return
    }
    if (e.target.name === 'nombre') {
      validateNombre(e.target.value)
      return
    }
    if (e.target.name === 'rut') {
      validateRut(e.target.value)
      return
    }
    if (e.target.name === 'password') {
      validatePassword(e.target.value)
      return
    }
    if (e.target.name === 'comuna') {
      validateComuna(e.target.value)
      return
    }
    if (e.target.name === 'direccion') {
      validateDireccion(e.target.value)
      return
    }
    if (e.target.name === 'telefono') {
      validateTelefono(e.target.value)
      return
    }
    setformDatos({
      ...formDatos,
      [e.target.name]: e.target.value
    })
  }

 
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const handleSubmit = async e => {
    e.preventDefault()

    if (
      emailError  === '' &&
      passwordError  === '' &&
      nombreError  === '' &&
      direccionError  === '' &&
      comunaError  === '' &&
      telefonoError  === '' &&
      rutError  === ''
    ) {
      notifyError('Tiene errores de validación')
      return
    }

    try {
      console.log(formDatos)
      const { data } = await api.post('/users', JSON.stringify(formDatos))
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
        Registro
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
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
                <FormControl sx={{ mt: 1, width: '50ch' }} variant='outlined'>
                  <InputLabel htmlFor='password'>Contraseña</InputLabel>
                  <OutlinedInput
                    name='password'
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
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
                  error={Boolean(nombreError)}
                  helperText={nombreError}
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
                  error={Boolean(rutError)}
                  helperText={rutError}
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
                  error={Boolean(direccionError)}
                  helperText={direccionError}
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
                  error={Boolean(comunaError)}
                  helperText={comunaError}
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
                  error={Boolean(telefonoError)}
                  helperText={telefonoError}
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
