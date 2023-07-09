import React from 'react'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Form from 'react-bootstrap/Form'
import { styled } from '@mui/material/styles'
import tablaProductos from '../../pages/Tablas/Tablaproductos'
import { useState } from 'react'
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
import { SelectChangeEvent } from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Metro({ categoria, producto }) {
  const navigate = useNavigate()
  let [cantidad, setCantidad] = useState(1)

  let [glosa, setGlosa] = useState('')
  let [peso, setPeso] = useState('')
  let [precio, setPrecio] = useState(0)
  let [color, setColor] = useState(0)
  const [show, setShow] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    //const data = new FormData(event.currentTarget);
  }
  const handleTextura = () => {
    setShow(true)
    setGlosa('')
  }
  const handleCategoria = p => {
    //setShow(true);
    navigate('/Productos')
  }


  const handleSalir = () => {
    setShow(false)
    setGlosa('')
  }


  const handleGlosa = p => {
    setPrecio(p.pesos.find(c => c.peso === peso));
    setGlosa(
      p.nombre + 
      ' -  Color ' + color + 
      ' Peso  ' + peso + ' gramos por mt2' + 
      ' Precio $' + precio
    )
    setShow(false)
  }

  const handleColor = (p, v) => {
    setColor(v.codigo);
  }

  const handleChange = (event: SelectChangeEvent) => {
    const i = event.target.value;
    setPeso(p.pesos[i].peso);
    setPrecio(p.pesos[i].precio);
  };


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
              <h5> ${p.precio.toLocaleString()} por metro cuadrado </h5>
              <h6 className='mt-4'>
                La venta es por metro lineal, el papel tiene {p.ancho} cm de ancho.
              </h6>
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
                      label='Cantidad Metros Lineales'
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
                Venta minima 10 mt lineales (14 mt cuadrados)
              </h6>
              <Button
                variant='text'
                sx={{ mb: 2 }}
                color='primary'
                onClick={() => handleTextura()}
              >
                Elige el color y gramaje
              </Button>
              <h6>
                {' '}
                {glosa === '' ? '' : 'Producto: '} {glosa}{' '}
              </h6>
              <h5 className='mt-4 mb-4'>
                Precio Total ${(p.precio * cantidad * p.ancho / 100).toLocaleString()}
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
                      {p.colores
                        .map((v, i) => (
                          <Item>
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
                              onClick={() => handleColor(p, v)}
                            />
                          </Item>
                        ))}
                    </Stack>

                    <FormControl className='mt-4 mb-4'>
                      <FormLabel id="demo-row-radio-buttons-group-label">Selecciona el Gramaje</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={peso}
                        onChange={handleChange}
                      >
                        {p.pesos.map((v, i) => (
                          <FormControlLabel value={i} control={<Radio />} label={v.peso} />
                        ))}
                      </RadioGroup>
                    </FormControl>

                    <Box
                      component='form'
                      onSubmit={handleSubmit}
                      Validate
                      sx={{ mt: 1 }}
                    >
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

export default Metro
