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

  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <EmailIcon color='primary' />
        Contáctanos
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
              <Button
                variant='contained'
                className='mt-3'
                color='primary'
                startIcon={<SendIcon />}
              // onClick={registrarContacto}
              >
                {' '}
                Enviar
              </Button>
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

export default Contacto
