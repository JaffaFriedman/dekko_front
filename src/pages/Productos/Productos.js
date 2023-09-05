import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/global/globalContext'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

function Productos () {
  const {
    BACKEND_URL
  } = useContext(GlobalContext)
  const navigate = useNavigate()

  const [tablaProductos, setTablaProductos] = useState([])
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const recuperaProductos = async (f, c) => {
    try {
      const { data } = await api.get(`/products/familia/${f}/categoria/${c}`)
      setTablaProductos(data.info)
    } catch (error) {
      console.log(error)
    }
  }
  const familiaObj=JSON.parse(localStorage.getItem('familiaObj'))
  const categoriaObj=JSON.parse(localStorage.getItem('categoriaObj'))
  const familia=localStorage.getItem('familia')
  const categoria=localStorage.getItem('categoria')
  useEffect(() => {
    recuperaProductos(familia, categoria)
  })

  const toProducto = p => {
    localStorage.setItem('productoObj', JSON.stringify(p))
    localStorage.setItem('producto', p._id)
    let tipoProducto=familiaObj.link
    if (tipoProducto ==='') tipoProducto=categoriaObj.link
    navigate(tipoProducto)
  }
  const options = { style: 'currency', currency: 'CLP' }

  return (
    <>
      <div className='bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center'>
        <h3>
          {' '}
          {familia} - {categoria}{' '}
        </h3>
      </div>
      <Container>
        <Row xs={1} md={1} lg={2} className='g-10 text-center'>
          {tablaProductos.map((p, idx) => (
            <Col p={p} key={idx}>
              <Card style={{ width: '25rem', height: '25rem' }} className='m-3'>
                <Card.Body>
                  <Card.Title>
                    {p.catalogo} - {p.nombre}{' '}
                  </Card.Title>
                  <Card.Img
                    variant='top'
                    style={{ maxHeight: '18rem' }}
                    src={p.url[0]}
                    onClick={() => toProducto(p)}
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
