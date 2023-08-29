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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import { useState, useContext } from 'react'

import { GlobalContext } from '../../context/global/globalContext'
import { CarritoContext } from '../../context/carrito/carritoContext'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '12rem',
  color: theme.palette.text.secondary
}))

function Papeles () {
  const { familia, categoria, producto, BACKEND_URL } =
    useContext(GlobalContext)
  const { dispatchCarrito } = useContext(CarritoContext)

  const p = producto
  const [tablaTexturas, setTablaTexturas] = useState([])

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const recuperaTexturas = async f => {
    try {
      const { data } = await api.get(`/texturas/familia/${f}`)
      setTablaTexturas(data.info)
    } catch (error) {
      console.log(error)
    }
  }

  const formDatos = {
    cantidad: 1,
    alto: 100,
    ancho: 100,
    mt2: 1,
    glosa: '',
    imagen: p.url[0],
    tela: 0,
    precio: p.precio,
    precioMt2: p.precio,
    textura: 0,
    papel: 0
  }

  const [datos, setDatos] = useState(formDatos)

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleCategoria = () => {
    navigate('/Productos')
  }

  const agregarCarro = () => {
    const item = {
      imagen: datos.imagen,
      glosa: datos.glosa,
      cantidad: datos.cantidad,
      precio: datos.precio
    }
    dispatchCarrito({ type: 'AGREGAR_ITEM', item })
  }

  const handleTextura = () => {
    recuperaTexturas(producto.familia)
    datos.textura = producto.url[0]
    datos.glosa = ''
    setDatos(datos)
    setShow(true)
  }

  const handleSalir = () => {
    setShow(false)
  }

  const handleGlosa = () => {
    datos.alto = parseInt(datos.alto) + 5
    datos.ancho = parseInt(datos.ancho) + 5
    datos.mt2 = (datos.ancho * datos.alto) / (100 * 100)
    datos.precio = parseInt(datos.mt2 * datos.precioMt2)
    datos.glosa =
      'Catálogo: ' +
      p.catalogo +
      ' Diseño: ' +
      p.nombre +
      '\n  Textura: ' +
      datos.papel +
      '\n Medidas Ancho: ' +
      datos.ancho +
      ' cm. Alto: ' +
      datos.alto +
      ' cm. Mt2: ' +
      datos.mt2.toFixed(2)
    setDatos(datos)
    setShow(false)
  }
  const options = { style: 'currency', currency: 'CLP' }

  const handlePapel = v => {
    datos.precio = v.precio
    datos.nombre = v.nombre
    setDatos(datos)
  }

  return (
    <>
      <div className='bg-dark text-bg-dark pb-2 mb-1 text-center'>
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
                  <Carousel.Item key={i}>
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
              <p className='mt: 3'> </p>

              <h6>
                {' '}
                {datos.glosa === '' ? '' : 'Producto: '} {datos.glosa}{' '}
              </h6>
              <h6>
                {' '}
                {datos.glosa === ''
                  ? 'Precio mt2 desde ' +
                    parseFloat(datos.precio.toFixed(0)).toLocaleString(
                      'es-CL',
                      options
                    )
                  : 'Precio Mural ' +
                    parseFloat(datos.precio.toFixed(0)).toLocaleString(
                      'es-CL',
                      options
                    )}{' '}
              </h6>

              <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Stack direction='row' spacing={2}>
                  <TextField
                        margin='normal'
                        required
                        variant='standard'
                        type='number'
                        label='Cantidad'
                        name='cantidad'
                        value={datos.cantidad}
                        onChange={handleChange}
                  />
                </Stack>
              </Box>

              <h5 className='mt-4 mb-4'>
                {' '}
                {datos.glosa === ''
                  ? ''
                  : 'Precio Total ' +
                    parseFloat(
                      (datos.precio * datos.cantidad).toFixed(0)
                    ).toLocaleString('es-CL', options)}{' '}
              </h5>
              <Button
                variant='text'
                sx={{ mb: 2 }}
                color='primary'
                onClick={() => handleTextura()}
              >
                Configura tu producto para agregar al carro
              </Button>
              <Box>
                {datos.glosa === '' ? (
                  <p>{familia.mensaje}</p>
                ) : (
                  <Button onClick={agregarCarro} color='primary'>
                    <ShoppingCartIcon color='primary' fontSize='large' />
                    Agregar al Carro
                  </Button>
                )}
              </Box>
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
                      Selecciona la textura
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Box
                      component='form'
                      onSubmit={handleSubmit}
                      sx={{ mt: 1 }}
                    >
                      <Stack
                        direction='row'
                        useFlexGap
                        flexWrap='wrap'
                        spacing={2}
                      >
                        {tablaTexturas
                          .filter(t => t.familia === categoria.familia)
                          .map((v, i) => (
                            <Item key={i}>
                              <img
                                className='d-block w-30 image-responsive justify-content-center '
                                style={{ maxHeight: '10rem' }}
                                alt={v.nombre}
                                src={v.url}
                              />
                              <Form.Check
                                inline
                                label={v.nombre}
                                value={v}
                                name='textura'
                                type='radio'
                                id={i}
                                onClick={() => handlePapel(v)}
                              />
                              <p>
                                Precio{' '}
                                {v.precio.toLocaleString('es-CL', options)}
                              </p>
                              <p>{v.descripcion}</p>
                            </Item>
                          ))}
                      </Stack>
                      <Modal.Title
                        id='example-custom-modal-styling-title'
                        className='mt-4'
                      >
                        Ingresa las medidas en centimetros
                      </Modal.Title>
                      <p>
                        Agregaremos automáticamente 5cm de excedente al ancho y
                        alto para margen de error
                      </p>

                      <Stack direction='row' spacing={2}>
                        <Item>
                          <TextField
                            margin='normal'
                            required
                            fullWidth
                            variant='standard'
                            type='number'
                            label='Ancho en centimetros'
                            name='ancho'
                            value={datos.ancho}
                            onChange={handleChange}
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
                            value={datos.alto}
                            label='Alto en centimetros'
                            onChange={handleChange}
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

export default Papeles
