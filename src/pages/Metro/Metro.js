import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Form from 'react-bootstrap/Form'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import Calculo from '../../pages/Calculo/Calculo'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CarritoContext } from '../../context/carrito/carritoContext'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Metro () {
  const { categoria, producto, cantidad, setCantidad } =
    useContext(GlobalContext)
  const { dispatchCarrito } = useContext(CarritoContext)

  const navigate = useNavigate()

  let [color, setColor] = useState(0)
  const [show, setShow] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
  }
  const otroColor = () => {
    setShow(true)
  }
  let [gramaje, setGramaje] = useState(0)
  const handleColor = i => {
    setColor(i)
  }

  const handleCategoria = () => {
    navigate('/Productos')
  }

  const handleSalir = () => {
    setShow(false)
  }

  const handleGlosa = () => {
    setShow(false)
  }
  const handleChangeGramaje = event => {
    setGramaje(event.target.value)
    datos.gramaje.gramaje
    setDatos(datos)
  }
  const p = producto

  const formDatos = {
    cantidad: 1,
    alto: 100,
    ancho: 100,
    mt2: 1,
    glosa: '',
    imagen: '',
    gramaje: 0,
    color: color,
    tela: 0,
    precio: p.recio,
    precioMt2: p.recio,
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
    datos.glosa =
      categoria.familia +
      ' ' +
      categoria.categoria +
      ' Código Color ' +
      p.colores[color].codigo +
      ' Gramaje ' +
      p.pesos[datos.gramaje].peso +
      'gr por mt'
    setCantidad(cantidad)

    const item = {
      imagen: p.colores[color].url,
      glosa: datos.glosa,
      color: color,
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
              <Container className='p-3 heigth=200 text-center'>
                <img
                  className='d-inline-block w-100 image-responsive justify-content-center ps-5'
                  alt={p.descripcion}
                  src={p.colores[color].url}
                  title={'Código Color: ' + p.colores[color].codigo}
                />
              </Container>
            </Grid>
            <Grid item xs={4} className='mt-4'>
              <h4>
                {' '}
                {p.catalogo} - {p.nombre}
              </h4>
              <h6>Se vende por metro lineal de 140 cm de ancho </h6>
              <FormControl className='mt-4 mb-4'>
                <FormLabel id='demo-row-radio-buttons-group-label'>
                  Selecciona el Gramaje por mt2
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                  value={gramaje}
                  onChange={handleChangeGramaje}
                >
                  {p.pesos.map((v, i) => (
                    <FormControlLabel
                      key={i}
                      value={i}
                      control={<Radio />}
                      label={v.peso}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <div>
                <Button
                  variant='text'
                  className='mt-1 mb-4 text-center'
                  sx={{ mb: 3 }}
                  color='primary'
                  onClick={() => otroColor()}
                >
                  Selecciona otro color
                </Button>
              </div>
              <h6>{'Gramaje por mt2: ' + p.pesos[gramaje].peso + ' gramos'}</h6>
              <h6>
                {' Precio mt2: ' +
                  parseFloat(p.pesos[gramaje]).toLocaleString(
                    'es-CL',
                    { style: 'currency', currency: 'CLP' }
                  )}
              </h6>
              <h6 className='mb-4 '>
                {'Precio Metro Lineal: ' +
                  parseFloat(
                    (p.pesos[gramaje].precio * 1.4)
                  ).toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                  })}
              </h6>
              <Box
                component='form'
                onSubmit={handleSubmit}
                validate
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
                      label='Cantidad de Metros Lineales'
                      name='cantidad'
                      autoComplete='cantidad'
                      value={datos.cantidad}
                      onChange={handleChange}
                      autoFocus
                    />
                  </Item>
                  <React.Fragment>
                    <Calculo />
                  </React.Fragment>
                </Stack>
              </Box>
              <h5 className='mt-4 mb-4'>
                {'Precio: ' +
                  parseFloat(
                    (p.pesos[gramaje].precio * 1.4 * cantidad).toFixed(0)
                  ).toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                  })}
              </h5>

              <Button onClick={agregarCarro} color='primary'>
                <ShoppingCartIcon color='primary' fontSize='large' />
                Agregar al Carro
              </Button>
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
                      Selecciona el color
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Stack
                      direction='row'
                      useFlexGap
                      flexWrap='wrap'
                      spacing={2}
                    >
                      {p.colores.map((v, i) => (
                        <Item key={i}>
                          <img
                            className='d-block w-40 image-responsive justify-content-center '
                            style={{
                              maxHeight: '10rem',
                              maxWidth: '11rem'
                            }}
                            alt={v.codigo}
                            src={v.url}
                          />
                          <Form.Check
                            inline
                            label={v.codigo}
                            value={v}
                            name='textura'
                            type='radio'
                            id={i}
                            onClick={() => handleColor(i)}
                          />
                        </Item>
                      ))}
                    </Stack>

                    <Box
                      component='form'
                      onSubmit={handleSubmit}
                      Validate
                      sx={{ mt: 1 }}
                    ></Box>

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

export default Metro
