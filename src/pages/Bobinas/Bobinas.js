import React from 'react'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import tablaProductos from '../../pages/Tablas/Tablaproductos'
import { useState } from 'react'
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Bobina ({ categoria, producto }) {
  const navigate = useNavigate()
  let [cantidad, setCantidad] = useState(1)
  const handleSubmit = event => {
    event.preventDefault()
    //const data = new FormData(event.currentTarget);
  }

  const handleCategoria = p => {
    //setShow(true);
    navigate('/Productos')
  }

  /*
  const handleCarrito = (precioUnitario) => {
    setMt2((alto * ancho)/ (100 * 100));
    setPrecio(mt2*precioUnitario);
     navigate("/Agregarcarro");
   // setShow(true)
  };
  */

  return (
    <>
      <div className='bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center'>
        <h3>
          {' '}
          {categoria.familia} {categoria.categoria}{' '}
        </h3>
      </div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          {tablaProductos
            .filter(
              c =>
                c.nombre.toString() === producto.toString() &&
                c.categoria.toString() === categoria.categoria &&
                c.familia === categoria.familia
            )
            .map((p, idx) => (
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Carousel className='pt-4 pb-4 ps-2 centered '>
                    {p.url.map((v, i) => (
                      <Carousel.Item>
                        <img
                          className='d-block w-100 image-responsive justify-content-center ps-5'
                          style={{ maxHeight: '48rem' }}
                          alt={p.descripcion}
                          src={v}
                        />
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
                  <h5> ${p.precio.toLocaleString()} por rollo </h5>
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
                          label='Cantidad'
                          name='cantidad'
                          autoComplete='cantidad'
                          value={cantidad}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setCantidad(event.target.value)
                          }}
                          autoFocus
                        />
                      </Item>
                    </Stack>
                  </Box>

                  <h6 className='mt-4'>
                    Ancho del rollo {p.ancho} centimetros
                  </h6>
                  <h6 className='mt-4'>Alto del rollo {p.alto} metros</h6>
                  <h5 className='mt-4 mb-4'>
                    Precio Total ${(p.precio * cantidad).toLocaleString()}
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
            ))}
        </Box>
      </Container>
    </>
  )
}

export default Bobina
