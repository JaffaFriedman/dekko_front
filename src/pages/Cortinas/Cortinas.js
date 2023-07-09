import React from 'react'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import tablaProductos from '../../pages/Tablas/Tablaproductos'
import tablaTelas from '../../pages/Tablas/Tablatelas'
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '12rem',
  color: theme.palette.text.secondary
}))
const options = { style: 'currency', currency: 'CLP' };

function Cortinas({ familia, categoria, producto }) {
  const [show, setShow] = useState(false)
  const [precioMt2, setPrecioMt2] = useState('')
  let [ancho, setAncho] = useState(100)
  let [alto, setAlto] = useState(100)
  let [mt2, setMt2] = useState(1)
  let [precio, setPrecio] = useState(0)
  let [cortina, setCortina] = useState('')
  let [glosa, setGlosa] = useState('')
  //  const [precioMural, setPrecioMural] = useState("");
  let [cantidad, setCantidad] = useState(1)
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    //const data = new FormData(event.currentTarget);
  }

  const handleCategoria = p => {
    navigate('/Productos')
  }

  const handleTextura = () => {
    setShow(true)
    setGlosa('')
  }

  const handleSalir = () => {
    setShow(false)
    setGlosa('')
  }

  const handleGlosa = p => {
    setMt2((ancho * alto) / (100 * 100))
    setPrecio(mt2 * precioMt2)
    setGlosa(
      p.nombre +
      '  - ' +
      cortina +
      '  ' +
      '. Medidas ancho: ' +
      ancho +
      ' cm. alto: ' +
      alto +
      ' cm. mt2: ' +
      mt2.toFixed(2)
    )
    setShow(false)
  }

  const handleCortina = (p, v) => {
    setMt2((ancho * alto) / (100 * 100))
    setPrecioMt2(p.precio)
    setPrecio(mt2 * precioMt2)
    setCortina(v.descripcion)
  }
  const p = tablaProductos.find(c => c.nombre.toString() === producto.toString() &&
    c.categoria.toString() === categoria.categoria &&
    c.familia === categoria.familia)

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
              <Carousel className='pt-4 pb-4 ps-3 centered '>
                {p.url.map((v, i) => (
                  <Carousel.Item>
                    <img
                      className='d-block w-100 image-responsive justify-content-center '
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
              <p className='mt: 3'> {familia.mensaje}</p>
              <Button
                variant='text'
                sx={{ mb: 2 }}
                color='primary'
                onClick={() => handleTextura()}
              >
                Configura tu producto
              </Button>
              <h6>
                {' '}
                {glosa === '' ? '' : 'Producto: '} {glosa}{' '}
              </h6>
              <h6>
                {' '}
                {precio === 0
                  ? ''
                  : 'Precio ' +
                  parseFloat(precio.toFixed(0)).toLocaleString('es-CL', options)}{' '}
              </h6>
              <Box
                component='form'
                onSubmit={handleSubmit}
                Validate
                sx={{ mt: 1 }}
              >
                <Stack direction='row' spacing={2}>
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
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setCantidad(event.target.value)
                    }}
                    autoFocus
                  />
                </Stack>
              </Box>
              <h5 className='mt-4 mb-4'>
                {' '}
                {precio === 0
                  ? ''
                  : 'Precio Total ' +
                  parseFloat(
                    (precio * cantidad).toFixed(0)
                  ).toLocaleString('es-CL', options)}{' '}
              </h5>
              <React.Fragment className='mt-4 mb-4'>
                <Agregarcarro />
              </React.Fragment>
              <Form>
                <Modal
                  show={show}
                  onHide={() => handleSalir()}
                  size='xl'
                  scrollable
                  dialogClassName='modal-120w'
                  aria-labelledby='example-custom-modal-styling-title'
                >
                  <Modal.Header closeButton>
                    <Modal.Title id='example-custom-modal-styling-title'>
                      Selecciona la Tela
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Stack
                      direction='row'
                      useFlexGap
                      flexWrap='wrap'
                      spacing={2}
                    >
                      {tablaTelas
                        .filter(
                          t =>
                            t.nombre.toString() === producto.toString() &&
                            t.categoria.toString() ===
                            categoria.categoria &&
                            t.familia === categoria.familia
                        )
                        .map((v, i) => (
                          <Item>
                            <img
                              className='d-block w-40 image-responsive justify-content-center '
                              style={{
                                maxHeight: '10rem',
                                maxWidth: '11rem'
                              }}
                              alt={v.descripcion}
                              src={v.url}
                            />
                            <Form.Check
                              inline
                              label={v.descripcion}
                              value={v}
                              name='textura'
                              type='radio'
                              id={i}
                              onClick={() => handleCortina(p, v)}
                            />
                          </Item>
                        ))}
                    </Stack>
                    <Modal.Title
                      id='example-custom-modal-styling-title'
                      className='mt-4'
                    >
                      Ingresa las medidas en centimetros
                    </Modal.Title>
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
                            label='Ancho en centimetros'
                            placeholder='Ingresa el ancho en cm'
                            name='ancho'
                            autoComplete='ancho'
                            value={ancho}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setAncho(event.target.value)
                              setMt2((ancho * alto) / (100 * 100))
                              setPrecio(mt2 * precioMt2)
                            }}
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
                            label='Alto en centimetros'
                            id='alto'
                            placeholder='Ingresa el alto en cm'
                            autoComplete='alto'
                            value={alto}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setAlto(event.target.value)
                              setMt2((ancho * alto) / (100 * 100))
                              setPrecio(mt2 * precioMt2)
                            }}
                          />
                        </Item>
                      </Stack>
                    </Box>

                    <Button
                      variant='text'
                      sx={{ mt: 3, mb: 2 }}
                      color='primary'
                      onClick={() => handleGlosa(p)}
                    >
                      Aceptar
                    </Button>
                  </Modal.Body>
                </Modal>
              </Form>
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

export default Cortinas
