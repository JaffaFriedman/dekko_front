import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import { useState, useContext } from 'react'
import Container from '@mui/material/Container'
import { TextField, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { ToastContainer, toast } from 'react-toastify'
import { GlobalContext } from '../../context/global/globalContext'
import { grey } from '@mui/material/colors'
import axios from 'axios'
//import validarContacto from "../Validar/ValidarContacto";

function Contacto() {
  const {
    BACKEND_URL
  } = useContext(GlobalContext)


  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const initialContact = {
    email: '',
    nombre: '',
    telefono: '' ,
    asunto: '',
    mensaje: ''
  }

  const [contacto, setContacto] = useState(initialContact)

  const handleInputChange = e => {
    const name = e.target.name
    const value = e.target.value
    setContacto({
      ...contacto,
      [name]: value
    })
  }

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json', 
    }
  })
  //const notifyError = msg => toast.error(msg)
  const notifySuccess = msg => toast.success(msg)
  const notifyError = msg => toast.error(msg)
 
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log(contacto)
      const { data } = await api.patch('/contact', JSON.stringify(contacto))
      notifySuccess(data.message)
    } catch (error) {
      notifyError('Error al enviar el mensaje')
      console.log(error)
    }
  }
  
  return (
    <div>
      <Button onClick={handleClickOpen}  sx={{ color: grey[50] }}>
        <EmailIcon sx={{ color: grey[50] }} fontSize='medium' />
         Envianos un mensaje 
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
                <EmailIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
              Contáctanos
              </Typography>
            </Box>


            <Box
              component='form'
              sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
              validate
              autoComplete='off'
            >
              <TextField
                name='nombre'
                required
                label='Nombre'
                type='text'
                placeholder='Nombre'
                onChange={e => handleInputChange(e)}
                value={contacto.nombre}
                variant='outlined'
              />
              <TextField
                name='correo'
                required
                type='email'
                placeholder='Correo Electrónico'
                label='Correo Electronico'
                onChange={e => handleInputChange(e)}
                value={contacto.correo}
                variant='outlined'
              />
            </Box>
            <Box
              component='form'
              sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
              validate
              autoComplete='off'
            >
              <TextField
                name='telefono'
                required
                type='number'
                placeholder='Teléfono'
                label='Teléfono'
                onChange={e => handleInputChange(e)}
                value={contacto.telefono}
                variant='outlined'
              />
            </Box>
            <Box
              component='form'
              sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
              validate
              autoComplete='off'
            >
              <TextField
                name='asunto'
                required
                label='Asunto'
                type='text'
                placeholder='Asunto'
                onChange={e => handleInputChange(e)}
                value={contacto.asunto}
                variant='outlined'
              />
            </Box>
            <Box
              component='form'
              sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete='off'
            >
              <TextField
                name='mensaje'
                label='Mensaje'
                type='text'
                required
                placeholder='Mensaje'
                onChange={e => handleInputChange(e)}
                value={contacto.mensaje}
                variant='outlined'
                multiline
                rows={6}
              />
            </Box>
            <Box
              component='form'
              sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
              noValidate
              autoComplete='off'
            >
              <Button onClick={handleSubmit} color='primary'>
                  <SendIcon color='primary' fontSize='large' />
                  Enviar
                </Button>
            </Box>
          </Container>
        </DialogContent>

 
      </Dialog>
    </div>
  )
}

export default Contacto
