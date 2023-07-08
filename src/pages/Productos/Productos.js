import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import tablaProductos from '../../pages/Tablas/Tablaproductos'

function Productos ({ familia, categoria, producto, setProducto }) {
  const navigate = useNavigate()

  const handleProducto = p => {
    setProducto(p.nombre)
    navigate(familia.link)
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
        <Row xs={1} md={2} lg={3} className='g-10 text-center'>
          {tablaProductos
            .filter(
              c =>
                c.categoria.toString() === categoria.categoria &&
                c.familia.toString() === categoria.familia
            )
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
                    <Card.Text>Precio ${p.precio.toLocaleString()} </Card.Text>
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
