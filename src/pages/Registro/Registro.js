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
export default function Registro () {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <AccountCircle />
        Registro
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
              <Avatar sx={{   bgcolor: 'primary.main' }}>
                <AccountCircle />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Crea tu cuenta
              </Typography>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {   width: '50ch' },
                  marginTop: 8
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='correo'
                  label='Correo Electronico'
                  variant='outlined'
                  helperText='Será nombre de su cuenta'
                />
                <FormControl sx={{   width: '50ch' }} variant='outlined'>
                  <InputLabel htmlFor='outlined-adornment-password'>
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    id='outlined-adornment-password'
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
                    label='Password'
                  />
                </FormControl>
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { mt: 1,  width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField id='rut' label='Rut' variant='outlined' />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField id='nombre' label='Nombre' variant='outlined' />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': {   width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='direccion'
                  label='Direccion'
                  helperText='La dirección será usada para sus envios'
                  variant='outlined'
                />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': {   width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField id='comuna' label='Comuna' variant='outlined' />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
                noValidate
                autoComplete='off'
              >
                <TextField id='telefono' label='Teléfono' variant='outlined' />
              </Box>
              <Box
                component='form'
                sx={{ '& > :not(style)': { m: 1, width: '31ch' } }}
                noValidate
                autoComplete='off'
              >
                <Button
                  variant='contained'
                  size='large'
                  startIcon={<SaveIcon />}
                  href='/login'
                >
                  {' '}
                  Enviar
                </Button>
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
