import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/global/globalContext'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import tablaFamilias from '../Familias/TablaFamilias'

function Productos () {
  const { BACKEND_URL } = useContext(GlobalContext)
  const navigate = useNavigate()
  const { idFamilia, idCategoria } = useParams()
  const [tablaProductos, setTablaProductos] = useState([])
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const leeCategoria = async (fam, cat) => {
    setCategoria(JSON.parse(localStorage.getItem('categoria')))
    localStorage.setItem('fam', fam)
    localStorage.setItem('cat', cat)
    try {
      const { data } = await api.get(
        `/categorias/familia/${fam}/categoria/${cat}`
      )
      setCategoria(data.info)
    } catch (error) {
      console.log(error)
    }
  }

  const leeProductos = async (fam, cat) => {
    try {
      const { data } = await api.get(
        `/products/familia/${fam}/categoria/${cat}`
      )
      setTablaProductos(data.info)
      leeCategoria(idFamilia, idCategoria)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    leeProductos(idFamilia, idCategoria)
  })

  const handleProducto = p => {
    const restoRuta = '/idProducto/' + p._id
    let ruta = familia.link
    if (categoria.link === null) {
      ruta = familia.link
    } else {
      if (categoria.link !== '') ruta = categoria.link
    }
    ruta = ruta + restoRuta
    localStorage.setItem('ruta', ruta)
    localStorage.setItem('producto', JSON.stringify(p))
    navigate(ruta)
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
        <Row xs={1} md={1} lg={2} className='g-10 text-center'>
          {tablaProductos.map((p, idx) => (
            <Col p={p} key={idx}>
              <Card style={{ width: '25rem', height: '25rem' }} className='m-3'>
                <Card.Body>
                  <Card.Title>
                    {p.categoria} - {p.nombre}{' '}
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
