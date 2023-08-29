import { useContext } from 'react'
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
import { useState } from 'react'
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Form from 'react-bootstrap/Form'
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
const options = { style: 'currency', currency: 'CLP' }

function Cortinas () {
  const { familia, categoria, producto, BACKEND_URL } =
    useContext(GlobalContext)
  const { dispatchCarrito } = useContext(CarritoContext)
  const p = producto

  const [tablaTelas, setTablaTelas] = useState([])
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const recuperaTelas = async (f, c) => {
    try {
      const { data } = await api.get(`/telas/familia/${f}/categoria/${c}`)
      setTablaTelas(data.info)
    } catch (error) {
      console.log(error)
    }
  }

  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleCategoria = () => {
    navigate('/Productos')
  }

  const handleTela = (f, c) => {
    recuperaTelas(f, c)
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
      p.nombre +
      '  - ' +
      datos.cortina +
      '  ' +
      '. Medidas ancho: ' +
      datos.ancho +
      ' cm. alto: ' +
      datos.alto +
      ' cm. mt2: ' +
      datos.mt2

    setShow(false)
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

  const agregarCarro = () => {
    const item = {
      imagen: datos.imagen,
      glosa: datos.glosa,
      cantidad: datos.cantidad,
      precio: datos.precio
    }
    dispatchCarrito({ type: 'AGREGAR_ITEM', item })
  }

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
              <p className='mt: 3'> {familia.mensaje}</p>
              <Button
                variant='text'
                sx={{ mb: 2 }}
                color='primary'
                onClick={() => handleTela(p.familia, p.categoria)}
              >
                Configura tu producto
              </Button>
              <h6>
                {' '}
                {datos.glosa === '' ? '' : 'Producto: '} {datos.glosa}{' '}
              </h6>
              <h6>
                {' '}
                {datos.glosa === ''
                  ? 'Precio mt2 desde ' +
                    parseFloat(datos.precio).toLocaleString('es-CL', options)
                  : 'Precio ' +
                    parseFloat(datos.precio).toLocaleString(
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
                    id='cantidad'
                    placeholder='Cantidad de productos'
                    label='Cantidad'
                    name='cantidad'
                    autoComplete='cantidad'
                    value={datos.cantidad}
                    onChange={handleChange}
                    autoFocus
                  />
                </Stack>
              </Box>
              <h5 className='mt-4 mb-4'>
                {' '}
                {datos.precio === 0
                  ? ''
                  : 'Precio Total ' +
                    parseFloat(datos.precio * datos.cantidad).toLocaleString(
                      'es-CL',
                      options
                    )}{' '}
              </h5>
              {datos.glosa === '' ? (
                <p>{familia.mensaje}</p>
              ) : (
                <Button onClick={agregarCarro} color='primary'>
                  <ShoppingCartIcon color='primary' fontSize='large' />
                  Agregar al Carro
                </Button>
              )}
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
                      {tablaTelas.map((v, i) => (
                        <Item key={i}>
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
                            name='datos.tela'
                            type='radio'
                            id={i}
                            onClick={handleChange}
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
                            value={datos.ancho}
                            onChange={handleChange}
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
                            value={datos.alto}
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

export default Cortinas
