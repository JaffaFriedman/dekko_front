import * as React from 'react'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import Container from '@mui/material/Container'
import { TextField, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { ToastContainer, toast } from 'react-toastify'

//import validarContacto from "../Validar/ValidarContacto";

function Contacto() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }



  const [contacto, setContacto] = useState('')
  const handleInputChange = e => {
    const name = e.target.name
    const value = e.target.value
    setContacto({
      ...contacto,
      [name]: value
    })
  }
  //const notifyError = msg => toast.error(msg)
  const notifySuccess = msg => toast.success(msg)
  const handleSubmit = () => {
    notifySuccess('Mensaje enviado')
   // notifyError('Error al enviar el mensaje')
  }
  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <EmailIcon color='primary' fontSize='large'/>
        Contáctanos
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
              Validate
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
              Validate
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
              noValidate
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
