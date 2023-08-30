import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'

import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Recuperar from '../../pages/Recuperar/Recuperar'
import Actualizar from '../../pages/Actualizar/Actualizar'

export default function Olvido () {
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <LockOutlinedIcon />
        Olvidaste tu contraseña
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
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Olvidaste tu contraseña
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
                  autoComplete='email'
                  autoFocus
                  helperText='Enviaremos un código de recuperación a este correo'
                />

                <Recuperar />
              </Box>
              <Box
                component='form'
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Box
                  component='form'
                  sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='Codigo'
                    label='Código de Recuperación'
                    variant='outlined'
                  />
                </Box>

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Nueva Contraseña'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Repetir Nueva Contraseña'
                  type='password'
                  id='password'
                  centered
                  autoComplete='current-password'
                />
                <Actualizar />
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}></Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
