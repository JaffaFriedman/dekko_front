import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
import Box from '@mui/material/Box'
import tablaCarrusel from '../../pages/Tablas/Tablacarrusel'

const Home = () => {
  return (
    <div className='text-center pb-2 ps-5 bg-dark text-bg-dark'>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Carousel className='centered '>
            {tablaCarrusel.map((p, idx) => (
              <Carousel.Item p={p} key={idx}>
                <img
                  className='d-block w-100 image-responsive justify-content-center ps-5'
                  alt={p.descripcion}
                  src={p.url}
                />
                <Carousel.Caption>
                  <h5>{p.descripcion}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>
      </Container>
    </div>
  )
}

export default Home
