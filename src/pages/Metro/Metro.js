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
import tablaProductos from '../../pages/Tablas/Tablaproductos'
import { useState } from 'react'
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
import Calculo from '../../pages/Calculo/Calculo'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const options = { style: 'currency', currency: 'CLP' }

function Metro () {
  const { categoria, producto, cantidad, setCantidad } =
    useContext(GlobalContext)
  const navigate = useNavigate()

  let [color, setColor] = useState(0)
  let [gramaje, setGramaje] = useState(0)
  const [show, setShow] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    //const data = new FormData(event.currentTarget);
  }
  const handleTextura = () => {
    setShow(true)
  }
  const handleCategoria = () => {
    //setShow(true);
    navigate('/Productos')
  }

  const handleSalir = () => {
    setShow(false)
  }

  const handleGlosa = () => {
    setShow(false)
  }

  const p = tablaProductos.find(
    c =>
      c.nombre.toString() === producto.toString() &&
      c.categoria.toString() === categoria.categoria &&
      c.familia === categoria.familia
  )

  const handleChangeGramaje = event => {
    setGramaje(event.target.value)
  }
  const handleChangeCantidad = event => {
    setCantidad(event.target.value)
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
                <h6>{'Código Color: ' + p.colores[color].codigo}</h6>
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
                  onClick={() => handleTextura()}
                >
                  Selecciona otro color
                </Button>
              </div>
              <h6>{'Gramaje por mt2: ' + p.pesos[gramaje].peso + ' gramos'}</h6>
              <h6>
                {' Precio mt2: ' +
                  parseFloat(p.pesos[gramaje].precio.toFixed(0)).toLocaleString(
                    'es-CL',
                    options
                  )}
              </h6>
              <h6 className='mb-4 '>
                {'Precio Metro Lineal: ' +
                  parseFloat(
                    (p.pesos[gramaje].precio * 1.4).toFixed(0)
                  ).toLocaleString('es-CL', options)}
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
                      label='Cantidad de Metros Lineales'
                      name='cantidad'
                      autoComplete='cantidad'
                      value={cantidad}
                      onChange={handleChangeCantidad}
                      autoFocus
                    />
                  </Item>
                  <React.Fragment className='mt-4 mb-4'>
                    <Calculo />
                  </React.Fragment>
                </Stack>
              </Box>
              <h5 className='mt-4 mb-4'>
                {'Precio: ' +
                  parseFloat(
                    (p.pesos[gramaje].precio * 1.4 * cantidad).toFixed(0)
                  ).toLocaleString('es-CL', options)}
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
                            onClick={() => setColor(i)}
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
