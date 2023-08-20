import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'

export default function Agregarcarro () {
  const { glosa, cantidad, precio, agregarItemCarrito } =
    useContext(GlobalContext)
  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    });
  };
  */
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
    agregarItemCarrito()
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <ShoppingCartIcon color='primary' />
        Agregar al Carro
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
                <ShoppingCartIcon />
              </Avatar>
              <p>Se agrego al carro {cantidad} </p>
              <p> {glosa} </p>
              <p>Precio Unitario {precio} </p>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Ir a Pagar
              </Button>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Seguir Comprando</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
