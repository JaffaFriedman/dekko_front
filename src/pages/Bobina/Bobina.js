import { useContext, Fragment, useState,useEffect  } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Form from 'react-bootstrap/Form'
import { styled } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Calculobobina from '../../pages/Calculo/Calculobobina'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import axios from 'axios'
import { CarritoContext } from '../../context/carrito/carritoContext'
import tablaFamilias from '../Familias/TablaFamilias'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Bobina () {
  const { cantidad, setCantidad, BACKEND_URL } = useContext(GlobalContext)
  const { dispatchCarrito } = useContext(CarritoContext)
  const navigate = useNavigate()
  const { idProducto } = useParams()
  let [color, setColor] = useState(0)
  const [show, setShow] = useState(false)
  const [producto, setProducto] = useState({})
  const [categoria, setCategoria] = useState({})
  const [familia, setFamilia] = useState({})

  
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
    datos.gramaje = gramaje
    datos.precioMt2 = parseFloat(producto.pesos[datos.gramaje].precio)
    datos.precio = datos.precioMt2 * 33
    setDatos(datos)
  }

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })


   

  const leeCategoria = async (fam,cat) => {
    try {
      const { data } = await api.get(`/categorias/familia/${fam}/categoria/${cat}`)
      setCategoria(data.info)
    } catch (error) {
      console.log(error)
    }
  }


  const formDatos = {
    cantidad: 1,
    alto: 300,
    ancho: 110,
    mt2: 1,
    glosa: '',
    imagen: '',
    gramaje: 0,
    color: color,
    precioMt2: producto.pesos[0].precio,
    precio: producto.pesos[0].precio * 33,
    textura: 0
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
      producto.colores[color].codigo +
      ' Gramaje ' +
      producto.pesos[datos.gramaje].peso +
      'gr por mt'
    setCantidad(cantidad)

    const item = {
      imagen: producto.colores[color].url,
      glosa: datos.glosa,
      color: color,
      cantidad: datos.cantidad,
      precio: datos.precio
    }
    dispatchCarrito({ type: 'AGREGAR_ITEM', item })
  }
  const leeProducto = async (prod) => {
    try {
      const { data } = await api.get(`/products/categoria/${prod}`)

      localStorage.setItem('producto', JSON.stringify(data.detail))
      setProducto(data.detail)
      setFamilia(tablaFamilias.find(f => f.familia === data.detail.familia))
      localStorage.setItem('familia', JSON.stringify(familia))
      leeCategoria(producto.familia, producto.categoria)
      localStorage.setItem('categoria', JSON.stringify(categoria))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    leeProducto(idProducto)
  })

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
              <img
                className='d-block w-100 image-responsive justify-content-center ps-5'
                alt={producto.descripcion}
                src={producto.colores[color].url}
              />
              <h6 className='mt-1 text-center'>
                {categoria.familia} - {categoria.categoria}{' '}
              </h6>
            </Grid>
            <Grid item xs={4} className='mt-4'>
              <h4>
                {' '}
                {producto.catalogo} - {producto.nombre}
              </h4>
              <h6>Las bobinas son de 33mt2 (Ancho 110 cm, Largo 30 mt) </h6>
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
                  {producto.pesos.map((v, i) => (
                    <FormControlLabel
                      key={i}
                      value={i}
                      control={<Radio />}
                      label={v.peso}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <div className='mt-1 mb-4 text-center'>
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
              <h6>
                {'Gramaje por mt2: ' + producto.pesos[gramaje].peso + ' gramos'}
              </h6>
              <h6>
                {' Precio mt2: ' +
                  parseFloat(
                    producto.pesos[datos.gramaje].precio
                  ).toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                  })}
              </h6>
              <h6 className='mb-4 '>
                {'Precio Bobina: ' +
                  parseFloat(
                    (producto.pesos[datos.gramaje].precio * 33).toFixed(0)
                  ).toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                  })}
              </h6>
              <Box
                component='form'
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Stack direction='row' spacing={2}>
                  <Item>
                    <TextField
                      margin='normal'
                      required
                      variant='standard'
                      type='number'
                      label='Cantidad de Bobinas'
                      name='cantidad'
                      value={datos.cantidad}
                      onChange={handleChange}
                    />
                  </Item>
                  <Fragment>
                    <Calculobobina />
                  </Fragment>
                </Stack>
              </Box>
              <h5 className='mt-4 mb-4'>
                {'Precio: ' +
                  parseFloat(
                    (datos.precio * datos.cantidad).toFixed(0)
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
                      {producto.colores.map((v, i) => (
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
                      noValidate
                      sx={{ mt: 1 }}
                    ></Box>

                    <Button
                      variant='text'
                      sx={{ mt: 3, mb: 2 }}
                      color='primary'
                      onClick={() => handleGlosa(producto)}
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
                onClick={() => handleCategoria(producto.categoria)}
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

export default Bobina
