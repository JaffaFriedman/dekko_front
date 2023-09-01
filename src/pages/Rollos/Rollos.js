import { Fragment, useContext, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate, useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Calculorollo from '../../pages/Calculo/Calculorollo'
import { CarritoContext } from '../../context/carrito/carritoContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { GlobalContext } from '../../context/global/globalContext'
import axios from 'axios'
import tablaFamilias from '../Familias/TablaFamilias'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Rollos () {
  const {   setCantidad, BACKEND_URL } = useContext(GlobalContext)
  const { dispatchCarrito } = useContext(CarritoContext)
  const [producto, setProducto] = useState({})
  const [categoria, setCategoria] = useState({})
  const [familia, setFamilia] = useState({})
  const { idProducto } = useParams()
  const navigate = useNavigate()
 

  const handleCategoria = () => {
    const ruta = `/Products/idFamilia/${producto.familia}/idCategoria/${producto.categoria}`
    localStorage.setItem('ruta',ruta)
    navigate(ruta)
  }
 
  const formDatos = {
    cantidad: 1,
    glosa: '',
    title: producto.descripcion,
    imagen: producto.url[0],
    precio: producto.precio,
    precioMt2: producto.precio
  }
  const [datos, setDatos] = useState(formDatos)
  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    datos.glosa = 'Catálogo: ' + producto.catalogo + ' Diseño: ' + producto.nombre
    setDatos(datos)
  }
   
 

  const agregarCarro = () => {
    const item = {
      imagen: datos.imagen,
      glosa: datos.glosa,
      cantidad: datos.cantidad,
      precio: datos.precio
    }
    setCantidad(datos.cantidad)
    dispatchCarrito({ type: 'AGREGAR_ITEM', item })
  }
  const options = { style: 'currency', currency: 'CLP' }
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

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


  const leeCategoria = async (fam,cat) => {
    try {
      const { data } = await api.get(`/categorias/familia/${fam}/categoria/${cat}`)
      setCategoria(data.info)
    } catch (error) {
      console.log(error)
    }
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
              <Carousel className='pt-4 pb-4 ps-2 centered '>
                {producto.url.map((v, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className='d-block w-100 image-responsive justify-content-center ps-5'
                      style={{ maxHeight: '48rem' }}
                      alt={producto.descripcion}
                      src={v}
                    />

                    <Carousel.Caption>
                      <h5>{producto.descripcion}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={4} className='mt-4'>
              <h4>
                {' '}
                {producto.catalogo} - {producto.nombre}
              </h4>
              <h5> {producto.precio.toLocaleString('es-CL', options)} por rollo </h5>
              <p>Las medidas son en centimetros.</p>
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
                      variant='standard'
                      type='number'
                      label='Cantidad'
                      name='cantidad'
                      value={datos.cantidad}
                      onChange={handleChange}
                    />
                  </Item>
                  <Fragment>
                    <Calculorollo />
                  </Fragment>
                </Stack>
              </Box>

              <h6 className='mt-4'>Ancho del rollo {producto.ancho} centimetros</h6>
              <h6 className='mt-4'>Alto del rollo {producto.alto} metros</h6>
              <h5 className='mt-4 mb-4'>
                Precio Total{' '}
                {(datos.precio * datos.cantidad).toLocaleString('es-CL', options)}
              </h5>
              <Button onClick={agregarCarro} color='primary'>
                <ShoppingCartIcon color='primary' fontSize='large' />
                Agregar al Carro
              </Button>
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

export default Rollos
