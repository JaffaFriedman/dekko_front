import React, { useState } from 'react'
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

export default function Carrito () {
  let [open, setOpen] = useState(false)
  let [cantidad, setCantidad] = useState(0)
  const handleClickOpen = () => {
    setOpen(true)
    setCantidad(cantidad + 1)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Badge color='secondary' badgeContent={cantidad}>
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
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
