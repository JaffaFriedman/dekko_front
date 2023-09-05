import { GlobalContext } from '../../context/global/globalContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
 
import axios from 'axios'

export default function Categoria () {
  const {
    ImageButton,
    ImageSrc,
    Image,
    ImageBackdrop,
    ImageMarked,
    BACKEND_URL
  } = useContext(GlobalContext)

  const familia = localStorage.getItem('familia')
  const iniCategoria = () => {
    localStorage.removeItem('categoria')
    localStorage.removeItem('tipoProducto')
    localStorage.removeItem('producto')
    localStorage.removeItem('categoriaObj')
    localStorage.removeItem('tipoProductoObj')
    localStorage.removeItem('productoObj')
  }
  const [tablaCategorias, setTablaCategorias] = useState([])

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 8000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const leeCategorias = async p => {
    try {
      const { data } = await api.get(`/categorias/familia/${p}`)
      setTablaCategorias(data.info)
    } catch (error) {
      console.log('Categorias leeCategoria', error)
    }
  }

  useEffect(() => {
    iniCategoria()
    leeCategorias(familia)
  })

  const navigate = useNavigate()
  const toProductos = p => {
    localStorage.setItem('categoria', p.categoria)
    localStorage.setItem('categoriaObj', JSON.stringify(p))
    const ruta = `/Products`
    localStorage.setItem('ruta', ruta)
    navigate(ruta)
  }

  return (
    <div>
      <div className='bg-dark text-bg-dark pb-2   text-center'>
        <h3> {familia} </h3>
      </div>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 400, width: '100%' }}
      >
        <Container>
          <Row xs={1} md={2} lg={3} className='g-10 text-center'>
            {tablaCategorias.map((p, idx) => (
              <Col image={p} key={idx}>
                <ImageButton
                  focusRipple
                  key={p.categoria}
                  onClick={() => toProductos(p)}
                  style={{
                    margin: 4
                  }}
                >
                  <ImageSrc
                    style={{
                      maxHeight: '10rem',
                      backgroundImage: `url(${p.url})`
                    }}
                  />
                  <ImageBackdrop className='MuiImageBackdrop-root' />
                  <Image>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      color='inherit'
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: theme => `calc(${theme.spacing(1)} + 6px)`
                      }}
                    >
                      {p.categoria}
                      <ImageMarked className='MuiImageMarked-root' />
                    </Typography>
                  </Image>
                </ImageButton>
              </Col>
            ))}
          </Row>
        </Container>
      </Box>
    </div>
  )
}
