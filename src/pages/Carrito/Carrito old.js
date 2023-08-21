import { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import { GlobalContext } from '../../context/global/globalContext'
import { CarritoContext } from '../../context/carrito/carritoContext'
import TextField from '@mui/material/TextField'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
export default function Carrito () {
  const options = { style: 'currency', currency: 'CLP' }

  const { cantidadCarro, setCantidadCarro, precio, cantidad } =
    useContext(GlobalContext)
  const { carrito, dispatch } = useContext(CarritoContext)

  let [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
    setCantidadCarro(cantidadCarro + 1)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Badge color='secondary' badgeContent={cantidadCarro}>
        <Button onClick={handleClickOpen} color='secondary'>
          <ShoppingCartIcon color='primary' />
        </Button>
      </Badge>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container component='main' maxWidth='xs' className='text-center'>
            <CssBaseline />
            <Box
              sx={{
                margin: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                <ShoppingCartIcon />
              </Avatar>
              <Stack
                spacing={4}
                direction='row'
                sx={{ color: 'action.active' }}
              >
                <Badge color='secondary' badgeContent={0}>
                  <ShoppingCartIcon />
                </Badge>
              </Stack>
            </Box>
            <ul></ul>
          </Container>
        </DialogContent>
        <div>
          {carrito.map((item, index) => (
            <div key={index}>
              <Box
                sx={{
                  padding: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <p>{item.glosa}</p>
                <Stack direction='row' spacing={2}>
                  <Avatar alt='producto' src={item.imagen} />
                  <p>
                    Precio Unitario:
                    {parseFloat(precio.toFixed(0)).toLocaleString(
                      'es-CL',
                      options
                    )}{' '}
                  </p>
                  <p>
                    Precio Total:
                    {parseFloat((precio * cantidad).toFixed(0)).toLocaleString(
                      'es-CL',
                      options
                    )}{' '}
                  </p>
                  <TextField
                    margin='normal'
                    disabled
                    variant='standard'
                    type='number'
                    id='precio'
                    placeholder='precio'
                    label='Precio'
                    name='precio'
                    autoComplete='precio'
                    value={precio}
                  />
                  <TextField
                    margin='normal'
                    required
                    variant='standard'
                    type='number'
                    id='cantidad'
                    placeholder='Cantidad de productos'
                    label='Cantidad'
                    name='cantidad'
                    autoComplete='cantidad'
                    value={cantidad}
                    onChange={e =>
                      dispatch({
                        type: 'MODIFICAR_CANTIDAD',
                        indice: index,
                        nuevaCantidad: e.target.value
                      })
                    }
                    autoFocus
                  />
                  <Button
                    onClick={() =>
                      dispatch({ type: 'ELIMINAR_ITEM', indice: index })
                    }
                  >
                    <DeleteForeverIcon color='primary' />
                  </Button>
                </Stack>
              </Box>
            </div>
          ))}
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
