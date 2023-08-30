import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Carousel from 'react-bootstrap/Carousel'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useContext,Fragment } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Calculorollo from '../../pages/Calculo/Calculorollo'
import { CarritoContext } from '../../context/carrito/carritoContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {useState} from 'react'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function Rollos () {
  const { categoria, producto, setCantidad } = useContext(GlobalContext)
  const { dispatchCarrito } = useContext(CarritoContext)

  const navigate = useNavigate()
 

  const handleCategoria = () => {
    navigate('/Productos')
  }
  const p = producto

  const formDatos = {
    cantidad: 1,
    glosa: '',
    title: p.descripcion,
    imagen: p.url[0],
    precio: p.precio,
    precioMt2: p.precio
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
    datos.glosa = 'Catálogo: ' + p.catalogo + ' Diseño: ' + p.nombre
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
                  <Carousel.Item key={i}>
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
              <h5> {p.precio.toLocaleString('es-CL', options)} por rollo </h5>
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

              <h6 className='mt-4'>Ancho del rollo {p.ancho} centimetros</h6>
              <h6 className='mt-4'>Alto del rollo {p.alto} metros</h6>
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

export default Rollos
