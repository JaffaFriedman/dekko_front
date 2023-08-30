import { Fragment, useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import { CarritoContext } from '../../context/carrito/carritoContext'
import TextField from '@mui/material/TextField'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { List, Media, BImg, BH6 } from 'bootstrap-4-react'
import Avatar from '@mui/material/Avatar'
import Pago from '../../pages/Pago/Pago'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

export default function Carrito () {
  const options = { style: 'currency', currency: 'CLP' }

  const { carritoCompra, dispatchCarrito } = useContext(CarritoContext)

  let [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Badge color='secondary' badgeContent={carritoCompra.totalProductos}>
        <Button onClick={handleClickOpen} color='secondary'>
          <ShoppingCartIcon color='primary' fontSize='large' />
        </Button>
      </Badge>
      <Dialog open={open} onClose={handleClose}>
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
                margin: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Stack
                spacing={4}
                direction='row'
                sx={{ color: 'action.active' }}
              ></Stack>
              <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                <ShoppingCartIcon fontSize='large' />
              </Avatar>
              <h4>Productos: {carritoCompra.totalProductos}</h4>
              <h4>
                Total:{' '}
                {parseFloat(
                  carritoCompra.precioTotal.toFixed(0)
                ).toLocaleString('es-CL', options)}
              </h4>
              <Fragment>
                <Pago />
              </Fragment>
            </Box>
          </Container>

          <List p='4' unstyled>
            {carritoCompra.items.map((item, index) => (
              <div key={index}>
                <Media as='li' border='primary' p='3' mb='3'>
                  <BImg src={item.imagen} mr='3' ps='2' width='200' />
                  <Media.Body>
                    <BH6 mt='0'>{item.glosa}</BH6>
                    <Stack direction='row' spacing={1}>
                      <p>
                        Unitario:
                        {parseFloat(item.precio.toFixed(0)).toLocaleString(
                          'es-CL',
                          options
                        )}{' '}
                      </p>
                      <p>
                        Total:
                        {parseFloat(
                          (item.precio * item.cantidad)
                        ).toLocaleString('es-CL', options)}{' '}
                      </p>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                      <TextField
                        margin='normal'
                        required
                        variant='standard'
                        type='number'
                        label='Cantidad'
                        name='cantidad'
                        value={item.cantidad}
                        onChange={e =>
                          dispatchCarrito({
                            type: 'MODIFICAR_CANTIDAD',
                            indice: index,
                            nuevaCantidad: e.target.value
                          })
                        }
                        autoFocus
                      />
                      <Button
                        onClick={() =>
                          dispatchCarrito({
                            type: 'ELIMINAR_ITEM',
                            indice: index
                          })
                        }
                      >
                        <DeleteForeverIcon color='primary' fontSize='large' />
                      </Button>
                    </Stack>
                  </Media.Body>
                </Media>
              </div>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  )
}
