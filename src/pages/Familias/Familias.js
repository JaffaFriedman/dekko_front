import { useContext  } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'

const tablaFamilias = [
  {
    familia: 'MURALES A MEDIDA',
    width: '25%',
    url: 'https://static.wixstatic.com/media/12b4f4_5e8d8cd870994115a76f5d56c0235043~mv2.jpg/v1/fill/w_297,h_223,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_5e8d8cd870994115a76f5d56c0235043~mv2.jpg',
    link: '/Papeles',
    mensaje:
      'Este producto se fabrica a medida del muro, debes elegir la textura del papel e ingresar las medidas para calcular el precio.'
  },
  {
    familia: 'PAPEL MURAL',
    width: '25%',
    url: 'https://static.wixstatic.com/media/12b4f4_aedb4e4173604a86b9df7ed655739803~mv2.jpg/v1/fill/w_758,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_aedb4e4173604a86b9df7ed655739803~mv2.jpg',
    link: '',
    mensaje: ''
  },
  {
    familia: 'CORTINAS Y TOLDOS',
    width: '25%',
    url: 'https://static.wixstatic.com/media/12b4f4_d2bf085eb79645feb8503b692b369810~mv2.jpg/v1/fill/w_318,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_d2bf085eb79645feb8503b692b369810~mv2.jpg',
    link: '/Cortinas',
    mensaje:
      'Este producto se fabrica a medida, debes elegir la tela o color e ingresar las medidas de la ventana para calcular el precio'
  }
]

export default function Familias () {
  const {
    ImageButton,
    ImageSrc,
    Image,
    ImageBackdrop,
    ImageMarked,
    setFamilia 
  } = useContext(GlobalContext)


  const navigate = useNavigate()
  const handleFamilia = p => {
    setFamilia(p)
    navigate('/Catalogo')
  }

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
                  onClick={() => handleFamilia(p)}
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
