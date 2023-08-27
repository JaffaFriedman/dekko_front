import { useState, useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CalculateIcon from '@mui/icons-material/Calculate'
import CancelIcon from '@mui/icons-material/Cancel'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '12rem',
  color: theme.palette.text.secondary
}))

export default function Calculo () {
  const {
    
    producto,
    cantidad,
    alto,
    setAlto,
    ancho,
    setAncho,
    setCantidad
  } = useContext(GlobalContext)
  let [open, setOpen] = useState(false)
  let [resto, setResto] = useState('')
  const p=producto;

  const handleClickOpen = () => {
    Calcular()
    setOpen(true)
  }
  const handleSubmit = event => {
    Calcular()
    event.preventDefault()
  }
  const Calcular = () => {
    const auxPano = Math.ceil(ancho / (p.ancho - 10))

    let mtl = Math.ceil((alto * auxPano + 5 * auxPano) / 100)
    if (mtl < 10) {
      let auxResto = 10 - mtl
      mtl = 10
      if (auxResto > 1) setResto(' Te sobran ' + auxResto + ' mtl.')
      else setResto(' Te sobra ' + auxResto + ' mtl.')
    } else setResto('')
    setCantidad(Math.ceil(mtl))
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleChangeAncho = event => {
    setAncho(event.target.value)
  }
  const handleChangeAlto = event => {
    setAlto(event.target.value)
  }
  return (
    <div>
      <Button onClick={handleClickOpen} color='primary'>
        <CalculateIcon color='primary' fontSize='large'/>
        Calculadora de mt lineales
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container component='main' className='text-center'>
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
                <CalculateIcon />
              </Avatar>
              <h5>¿Cuántos metros lineales necesito?</h5>
              <p>
                Debes medir la altura del muro de piso a techo (sin incluir
                guardapolvos y cornisas) y el ancho completo del muro no
                importando si existen puertas o ventanas.{' '}
              </p>
              <p>
                Si hay varios muros suma todos los anchos y usa la altura mayor.
                Si hay mucha diferencia de altura calcula los muros con
                diferencia por separado.{' '}
              </p>
              <p>
                En el calculo consideraremos los excedentes necesarios. La
                compra minima es de 10 metros lineales
              </p>
              <Stack
                spacing={4}
                direction='row'
                sx={{ color: 'action.active' }}
              ></Stack>
              <Container>
                <Box
                  component='form'
                  onSubmit={handleSubmit}
                  Validate
                  sx={{ mt: 1 }}
                >
                  <Stack direction='row' spacing={2}>
                    <Item>
                      <TextField
                        margin='normal'
                        required
                        fullWidth
                        variant='standard'
                        type='number'
                        id='ancho'
                        label='Ancho del muro en cm'
                        placeholder='Ingresa el ancho del muro en cm'
                        name='ancho'
                        autoComplete='ancho'
                        value={ancho}
                        onChange={handleChangeAncho}
                        autoFocus
                      />
                    </Item>
                    <Item>
                      <TextField
                        margin='normal'
                        required
                        fullWidth
                        variant='standard'
                        type='number'
                        name='alto'
                        label='Alto del muro en cm'
                        id='alto'
                        placeholder='Ingresa el alto del muro en cm'
                        autoComplete='alto'
                        value={alto}
                        onChange={handleChangeAlto}
                      />
                    </Item>
                  </Stack>
                </Box>

                <strong className='mt-5'>
                  Para tu muro debes comprar {cantidad} mtl.
                </strong>
                <p>{resto}</p>
              </Container>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={Calcular}>
            <CalculateIcon color='primary' fontSize='large'/>
            Calcular
          </Button>
          <Button onClick={handleClose}>
            <CancelIcon color='primary' />
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
