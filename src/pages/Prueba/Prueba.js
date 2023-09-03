import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import SaveIcon from '@mui/icons-material/Save'
import Container from '@mui/material/Container'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import Typography from '@mui/material/Typography'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Avatar from '@mui/material/Avatar'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/user/userContext'
import { types } from '../../context/user/userReducer'
import axios from 'axios'
import { GlobalContext } from '../../context/global/globalContext'
import { ToastContainer, toast } from 'react-toastify'

export default function MiPerfil () {
  const [open, setOpen] = useState(false)
  const [datosValidos, setDatosValidos] = useState(true)
  const { userName, BACKEND_URL } = useContext(GlobalContext)
  const token = localStorage.getItem('token')

  const handleClickOpen = () => {
    setOpen(true)
    if (token !== null) {
      recuperaUsuario()
    }
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
    telefono: '',
    rol: '',
    premium: false,
    dob: ''
  })

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
      setTelefonoError('Campo requerido')
    } else if (!/^\d{8}$/.test(e)) {
      setTelefonoError('Formato de teléfono no válido')
    } else {
      setTelefonoError('')
    }
  }

  const [rutError, setRutError] = useState('')
  function validateRut (rut) {
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
    if (dv !== calculatedDV) setRutError('Rut inválido')
    else setRutError('')
  }

  const handleChange = e => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value
    })
    validar(e.target.name, e.target.value)
  }

  const wtoken = token
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${wtoken}`
    }
  })

  const validar = (nombre, valor) => {
    switch (nombre) {
      case 'telefono':
        validateTelefono(valor)
        break
      case 'nombre':
        validateNombre(valor)
        break
      case 'direccion':
        validateDireccion(valor)
        break
      case 'comuna':
        validateComuna(valor)
        break
      case 'rut':
        validateRut(valor)
        break
      case 'todos':
        if (
          nombreError === '' &&
          direccionError === '' &&
          comunaError === '' &&
          telefonoError === '' &&
          rutError === ''
        )
          setDatosValidos(true)
        else setDatosValidos(false)
        break
      default:
        setNombreError('')
        setDireccionError('')
        setComunaError('')
        setTelefonoError('')
        setRutError('')
        setDatosValidos(true)
    }
  }

  const actualizaUsuario = async e => {
    e.preventDefault()
    const idUser = localStorage.getItem('idUser')
    validar()
    if (datosValidos)
      try {
        const { data } = await api.put(`/users/auth/${idUser}`, formUser)
        dispatchUser({
          type: types.setUserState,
          payload: data
        })
        if (data.message === 'OK')
          notifySuccess(formUser.nombre + ' hemos actualizado tu cuenta')
        else notifyError(data.message)
      } catch (error) {
        notifyError('Tuvimos un error al actualizar tu cuenta')
      }
    else
      notifyError(
        'No pudimos actualizar tu cuenta porque tienes errores de vadacion'
      )
  }

  const recuperaUsuario = async () => {
    const idUser = localStorage.getItem('idUser')
    try {
      const { data } = await api.get(`/users/auth/${idUser}`)
      setFormUser(data.detail)
    } catch (error) {
      notifyError('Error del servidor, intente mas tarde')
    }
  }
  const notifyError = msg => toast.error(msg)
  const notifySuccess = msg => toast.success(msg)

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <AccountCircle fontSize='large' />
        {userName}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <ToastContainer position='top-center' />
        <DialogActions>
          <Button onClick={handleClose}>
            <CancelPresentationIcon />
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
                  disabled
                />
              </Box>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': { mt: 1, width: '50ch' }
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  name='nombre'
                  value={formUser.nombre}
                  onChange={handleChange}
                  label='Nombre'
                  type='text'
                  variant='outlined'
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
                  value={formUser.rut}
                  onChange={handleChange}
                  label='Rut'
                  variant='outlined'
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
                  value={formUser.direccion}
                  onChange={handleChange}
                  variant='outlined'
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
                  value={formUser.comuna}
                  label='Comuna'
                  variant='outlined'
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
                  name='formUser.telefono'
                  id='telefono'
                  onChange={handleChange}
                  label='Teléfono'
                  value={formUser.telefono}
                  variant='outlined'
                  type='number'
                  helperText={telefonoError}
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1, width: '31ch' } }}
                noValidate
                autoComplete='off'
              >
                <Button onClick={actualizaUsuario} color='primary'>
                  <SaveIcon color='primary' fontSize='large' />
                  Actualizar
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  )
}
