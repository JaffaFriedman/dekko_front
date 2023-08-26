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
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
import axios from 'axios'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '12rem',
  color: theme.palette.text.secondary
}))

function Papeles () {
  const {
    familia,
    categoria,
    producto,
    alto,
    setAlto,
    ancho,
    setAncho,
    precio,
    setPrecio,
    setMt2,
    precioMt2,
    setPrecioMt2,
    glosa,
    setGlosa,
    cantidad,
    setCantidad,
    setImagen,
    setTextura
  } = useContext(GlobalContext)

  const [tablaTexturas, setTablaTexturas] = useState([])
  const recuperaTexturas = async (f) => {
    const url = `http://localhost:4000/texturas/familia/${f}`
    try {
      const { data } = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setTablaTexturas(data.info)
    } catch (error) {
      console.log(error)
    }
  }



  const [show, setShow] = useState(false)

  let [papel, setPapel] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleCategoria = () => {
    navigate('/Productos')
  }

  const handleTextura = () => {
    recuperaTexturas(producto.familia)
    setImagen(producto.url[0])
    setShow(true)
    setGlosa('')
  }

  const handleSalir = () => {
    setShow(false)
  }

  const handleGlosa = p => {
    const nuevoAncho = parseInt(ancho) + 5
    const nuevoAlto = parseInt(alto) + 5
    const nuevoMt2=(nuevoAncho * nuevoAlto) / (100 * 100);
    const nuevoPrecio=nuevoMt2*precioMt2
    handleSubmit;
    setGlosa(
      'Catálogo: ' +
        p.catalogo +
        ' Diseño: ' +
        p.nombre +
        '\n  Textura: ' +
        papel +
        '\n Medidas Ancho: ' +
        nuevoAncho +
        ' cm. Alto: ' +
        nuevoAlto +
        ' cm. Mt2: ' +
        nuevoMt2.toFixed(2)
    )
    setMt2(nuevoMt2)
    setAlto(nuevoAncho)
    setAncho(nuevoAlto)
    setPrecio(nuevoPrecio)
    setShow(false)
  }
  const options = { style: 'currency', currency: 'CLP' }

  const p = producto;

 
  const handlePapel = v => {
    setPrecioMt2(v.precio)
    setPapel(v.nombre)
    setTextura(v.url)
  }
  const handleChangeAncho = event => {
    setAncho(event.target.value)
  }
  const handleChangeAlto = event => {
    setAlto(event.target.value)
  }
  const handleChangeCantidad = event => {
    setCantidad(event.target.value)
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
                {glosa === '' ? '' : 'Producto: '} {glosa}{' '}
              </h6>
              <h6>
                {' '}
                {glosa === ''
                  ? 'Precio mt2 desde ' +
                  parseFloat(precio.toFixed(0)).toLocaleString(
                    'es-CL',
                    options)
                  
                  : 'Precio Mural ' +
                    parseFloat(precio.toFixed(0)).toLocaleString(
                      'es-CL',
                      options
                    )}{' '}
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
                    onChange={handleChangeCantidad}
                    autoFocus
                  />
                </Stack>
              </Box>

              <h5 className='mt-4 mb-4'>
                {' '}
                {glosa === ''
                  ? ''
                  : 'Precio Total ' +
                    parseFloat((precio * cantidad).toFixed(0)).toLocaleString(
                      'es-CL',
                      options
                    )}{' '}
              </h5>
              <Button
                variant='text'
                sx={{ mb: 2 }}
                color='primary'
                onClick={() => handleTextura()}
              >
                Configura tu producto
              </Button>
              {glosa === '' ? (
                <p>{familia.mensaje}</p>
              ) : (
                <React.Fragment className='mt-4 mb-4'>
                  <Agregarcarro />
                </React.Fragment>
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
                      Selecciona la textura
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Box
                      component='form'
                      onSubmit={handleSubmit}
                      Validate
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
                              Precio {v.precio.toLocaleString('es-CL', options)}
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
                            id='ancho'
                            label='Ancho en centimetros'
                            placeholder='Ingresa el ancho en cm'
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
                            label='Alto en centimetros'
                            id='alto'
                            placeholder='Ingresa el alto en cm'
                            autoComplete='alto'
                            value={alto}
                            onChange={handleChangeAlto}
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
