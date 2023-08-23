import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import axios from 'axios'
import { useState } from 'react'

function Productos () {
  const {
    familia,
    categoria,
    setGlosa,
    setProducto,
    setCantidad,
    setAncho,
    setAlto,
    setMt2,
    setPrecio 
  } = useContext(GlobalContext)
  const navigate = useNavigate()
  setCantidad(1)
  setAlto(100)
  setAncho(100)
  setMt2(1)
  setGlosa('')
  const [tablaProductos, setTablaProductos] = useState([])
  const recuperaProductos = async (f,c) => {
    const url = `http://localhost:4000/products/familia/${f}/categoria/${c}`
    try {
      const { data } = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setTablaProductos(data.info)
    } catch (error) {
      console.log(error)
    }
  }

  recuperaProductos(categoria.familia,categoria.categoria)

  const handleProducto = p => {
    setProducto(p )
    setPrecio(p.precio)
    if (categoria.link !== '') navigate(categoria.link)
    else navigate(familia.link)
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
        <Row xs={1} md={2} lg={3} className='g-10 text-center'>
          {tablaProductos
            .map((p, idx) => (
              <Col p={p} key={idx}>
                <Card
                  style={{ width: '25rem', height: '25rem' }}
                  className='m-3'
                >
                  <Card.Body>
                    <Card.Title>
                      {p.catalogo} - {p.nombre}{' '}
                    </Card.Title>
                    <Card.Img
                      variant='top'
                      style={{ maxHeight: '18rem' }}
                      src={p.url[0]}
                      onClick={() => handleProducto(p)}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text>
                      Precio desde {p.precio.toLocaleString('es-CL', options)}{' '}
                      {p.venta}
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default Productos
