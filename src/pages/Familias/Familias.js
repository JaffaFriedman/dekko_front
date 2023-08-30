import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Familias () {
  const {
    ImageButton,
    ImageSrc,
    Image,
    ImageBackdrop,
    ImageMarked,
    setFamilia,
    BACKEND_URL
  } = useContext(GlobalContext)

  const [tablaFamilias, setTablaFamilias] = useState([])

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const recuperaFamilias = async () => {
    try {
      const { data } = await api.get('/familias')
      setTablaFamilias(data.info)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    recuperaFamilias()
  })

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
