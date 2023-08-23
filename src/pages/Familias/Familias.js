import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'
import {  useEffect } from 'react'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  width: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15
    },
    '& .MuiImageMarked-root': {
      opacity: 0.5
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor'
    }
  }
}))

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%'
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity')
}))

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity')
}))

export default function Familias () {

  const { setFamilia } = useContext(GlobalContext)
 const [tablaFamilias, setTablaFamilias] = useState([])
  const recuperaFamilias = async () => {scrollTo
    try {
      const { data } = await axios.get('http://localhost:4000/familias', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setTablaFamilias(data.info)
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    recuperaFamilias();
  }, []); 



  const navigate = useNavigate()
  const handleFamilia = p => {
    setFamilia(p)
    navigate('/Catalogo')
  }

  return (
    <div>
      <div className='bg-dark text-bg-dark pb-2   text-center'>
        <h3> CATEGORIAS </h3>
      </div>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 400, width: '100%' }}
      >
        <Container>
          <Row xs={1} md={2} lg={4} className='g-10 text-center'>
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
