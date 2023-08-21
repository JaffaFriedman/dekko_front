import React from 'react'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'

import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import tablaProductos from '../../pages/Tablas/Tablaproductos'
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
import Calculorollo from '../../pages/Calculo/Calculorollo'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Rollos () {
  const { categoria, producto, cantidad,  setImagen,setCantidad, setGlosa } =
    useContext(GlobalContext)
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    //const data = new FormData(event.currentTarget);
  }

  setGlosa('')
  const handleCategoria = () => {
    //setShow(true);
    navigate('/Productos')
  }
  const handleChangeCantidad = event => {
    setCantidad(event.target.value)
  }
  const options = { style: 'currency', currency: 'CLP' }
  const p = tablaProductos.find(
    c =>
      c.nombre.toString() === producto.toString() &&
      c.categoria.toString() === categoria.categoria &&
      c.familia === categoria.familia
  )
  return (
    <>
      <div className='bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center'>
        <h3>
          {' '}
          {categoria.familia} - {categoria.categoria}{' '}
        </h3>
      </div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Carousel className='pt-4 pb-4 ps-2 centered '>
                {p.url.map((v, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className='d-block w-100 image-responsive justify-content-center ps-5'
                      style={{ maxHeight: '48rem' }}
                      alt={p.descripcion}
                      src={v}
                    />
                    {setImagen(v)}
                    <Carousel.Caption>
                      <h5>{p.descripcion}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={4} className='mt-4'>
              <h4>
                {' '}
                {p.catalogo} - {p.nombre}
              </h4>
              {setGlosa(p.catalogo + ' - '+ p.nombre)}
              <h5> {p.precio.toLocaleString('es-CL', options)} por rollo </h5>
              <p>Las medidas son en centimetros.</p>
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
                      id='cantidad'
                      label='cantidad'
                      name='Cantidad de Rollos'
                      value={cantidad}
                      onChange={handleChangeCantidad}
                      autoFocus
                    />
                  </Item>
                  <React.Fragment className='mt-4 mb-4'>
                    <Calculorollo />
                  </React.Fragment>
                </Stack>
              </Box>

              <h6 className='mt-4'>Ancho del rollo {p.ancho} centimetros</h6>
              <h6 className='mt-4'>Alto del rollo {p.alto} metros</h6>
              <h5 className='mt-4 mb-4'>
                Precio Total{' '}
                {(p.precio * cantidad).toLocaleString('es-CL', options)}
              </h5>
              <React.Fragment className='mt-4 mb-4'>
                <Agregarcarro />
              </React.Fragment>

              <Button
                variant='text'
                sx={{ mt: 3, mb: 2 }}
                color='primary'
                onClick={() => handleCategoria(p.categoria)}
              >
                Mas diseños categoria {producto.categoria}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Rollos
