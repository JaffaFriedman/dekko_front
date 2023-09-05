import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import tablaFamilias from '../Familias/TablaFamilias'

export default function Familias () {
  const { ImageButton, ImageSrc, Image, ImageBackdrop, ImageMarked } =
    useContext(GlobalContext)

  const iniFamilia = () => {
    localStorage.removeItem('familia')
    localStorage.removeItem('categoria')
    localStorage.removeItem('tipoProducto')
    localStorage.removeItem('producto')
    localStorage.removeItem('familiaObj')
    localStorage.removeItem('categoriaObj')
    localStorage.removeItem('tipoProductoObj')
    localStorage.removeItem('productoObj')
  }

  const navigate = useNavigate()

  const toCategoria = p => {
    localStorage.setItem('familiaObj', JSON.stringify(p))
    localStorage.setItem('familia', p.familia)
    if (p.link !== '') localStorage.setItem('tipoProducto', p.link)
    else localStorage.removeItem('tipoProducto')
    const ruta = `/Categorias`
    //const ruta=`/Catalogo`
    localStorage.setItem('ruta', ruta)
    navigate(ruta)
  }

  useEffect(() => {
    iniFamilia()
  })
  return (
    <div>
      <div className='bg-dark text-bg-dark pb-2   text-center'>
        <h3> FAMILIAS DE PRODUCTOS </h3>
      </div>

      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 400, width: '100%' }}
      >
        <Container>
          <Row xs={1} md={2} lg={3} className='g-10 text-center'>
            {tablaFamilias.map((p, idx) => (
              <Col image={p} key={idx}>
                <ImageButton
                  focusRipple
                  key={p.familia}
                  onClick={() => toCategoria(p)}
                  style={{
                    margin: 4
                  }}
                >
                  <ImageSrc style={{ backgroundImage: `url(${p.url})` }} />
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
                      {p.familia}
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
