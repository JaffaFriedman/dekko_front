import React from 'react'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/joy/Button'
import tablaProductos from '../Tablas/Tablaproductos'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import Add from '@mui/icons-material/Add'
import { useState } from 'react'

function Papel ({ categoria, setCategoria, papel }) {
  let [precio, setPrecio] = useState('')
  let [ancho, setAncho] = useState('100')
  let [alto, setAlto] = useState('100')
  let [mt2, setMt2] = useState('')
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setPrecio(data.get('ancho') * data.get('alto'))
  }

  const handleCategoria = p => {
    setCategoria(p)
    navigate('/Papeles')
  }
  return (
    <section Papel>
      <div className='bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center'>
        <h1>Papel Mural Diseño {papel} </h1>
      </div>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          {tablaProductos
            .filter(c => c.nombre.toString() === papel.toString())
            .map((p, idx) => (
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Carousel className='pb-2 ps-5 centered '>
                    <Carousel.Item>
                      <img
                        className='d-block w-100 image-responsive justify-content-center   mb-5 mt-3'
                        alt='Ambientación'
                        src={p.urlambientacion}
                      />
                      <Carousel.Caption>
                        <h5>{p.descripcion}</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className='d-block w-100 image-responsive justify-content-center   mb-5 mt-3'
                        alt='Papel Mural'
                        src={p.urlfoto}
                      />
                      <Carousel.Caption>
                        <h5>{p.descripcion}</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Grid>
                <Grid item xs={2} className='mt-5'>
                  <h4>{p.catalogo}</h4>
                  <p>Precio mt2 {p.precio}</p>
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
                      variant='standard'
                      type='number'
                      id='ancho'
                      label='Ancho en centimetros'
                      name='ancho'
                      autoComplete='ancho'
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setAncho(event.target.value)
                        setMt2(((alto / 100) * ancho) / 100)
                        setPrecio(mt2 * p.precio)
                      }}
                      autoFocus
                    />
                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      variant='standard'
                      type='number'
                      name='alto'
                      label='Alto en centimetros'
                      id='alto'
                      autoComplete='alto'
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setAlto(event.target.value)
                        setMt2(((alto / 100) * ancho) / 100)
                        setPrecio(mt2 * p.precio)
                      }}
                    />
                  </Box>
                  <p className='mt-4'>Metros Cuadrados {mt2}</p>
                  <p>Precio del mural ${precio}</p>
                  <Button
                    type='submit'
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    startDecorator={<Add />}
                    color='primary'
                  >
                    Agregar al Carro
                  </Button>
                  <Button
                    variant='text'
                    sx={{ mt: 3, mb: 2 }}
                    color='primary'
                    onClick={() => handleCategoria(p.categoria)}
                  >
                    Otros diseños Categoria {p.categoria}
                  </Button>
                </Grid>
              </Grid>
            ))}
        </Box>
      </Container>
    </section>
  )
}

export default Papel
