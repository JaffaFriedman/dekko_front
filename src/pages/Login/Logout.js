import { useState, useContext } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { GlobalContext } from '../../context/global/globalContext'
import { CarritoContext } from '../../context/carrito/carritoContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function Logout () {
  const {  setToken, setIdUser } = useContext(GlobalContext)
  const { carritoCompra, } = useContext(CarritoContext)
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const notifySuccess = msg => toast.success(msg)

  const handleSubmit = async e => {
    e.preventDefault()
    setToken('')
    setIdUser('')
    notifySuccess('Hasta pronto!')
  }
  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <LogoutIcon color='primary' fontSize='large' />
        Desconectate
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
                <LogoutIcon />
              </Avatar>
              <Box
                component='form'
                noValidate
                sx={{ marginTop: 4, marginBottom: 4 }}
              >
                <Grid container sx={{ marginTop: 4 }}>
                  <Grid item xs>
                    {carritoCompra.totalProductos === 0 ? (
                      <Button onClick={handleSubmit} color='primary'>
                        <LoginIcon color='primary' fontSize='large' />
                        ¿Estas seguro?
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit} color='primary'>
                        <LoginIcon color='primary' fontSize='large' />
                        ¿Aún tienes cosas en tu carro, estas seguro?
                      </Button>
                    )}
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
