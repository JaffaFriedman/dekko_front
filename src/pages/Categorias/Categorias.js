import { GlobalContext } from '../../context/global/globalContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import tablaFamilias from '../Familias/TablaFamilias'

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
  const { idFamilia } = useParams()
  const familia = tablaFamilias.find(f => f.familia === idFamilia);
  const [tablaCategorias, setTablaCategorias] = useState([])

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const leeCategorias = async (p) => {
    console.log('Categorias leeCategoria', `/categorias/familia/${p}`)
    try {
      const { data } = await api.get(`/categorias/familia/${p}`)
      setTablaCategorias(data.info)
    } catch (error) {
      console.log('Categorias leeCategoria',error)
    }
  }

  useEffect(() => {
    leeCategorias(familia.familia)})


  const navigate = useNavigate()
  const handleProductos = c => {
    const ruta=`/Products/idFamilia/${c.familia}/idCategoria/${c.categoria}`
    localStorage.setItem('ruta',ruta)
    localStorage.setItem('categoria',JSON.stringify(c))
    navigate(ruta)
  }

  return (
    <div>
      <div className='bg-dark text-bg-dark pb-2   text-center'>
        <h3> {familia.familia} </h3>
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
                  onClick={() => handleProductos(p)}
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
