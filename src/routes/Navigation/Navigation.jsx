import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.JPG'
import Carrito from '../../pages/Carrito/Carrito'
import Login from '../../pages/Login/Login'
import Buscar from '../../pages/Buscar/Buscar'
import Contacto from '../../pages/Contacto/Contacto'
import MiPerfil from '../../pages/MiPerfil/MiPerfil'

const Navigation = () => {
  return (
    <div className='ps-5'>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            width='70'
            height='70'
            className='d-inline-block align-top'
            alt='Logo'
          />
        </Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/Familias'>
              CATALOGO
            </Nav.Link>
          </Nav>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/Nosotros'>
              QUIENES SOMOS
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Nav className='me-auto'>
            <Nav.Link>
              <React.Fragment>
                <Buscar />
              </React.Fragment>
            </Nav.Link>
            <Nav.Link>
              <React.Fragment>
                <MiPerfil />
              </React.Fragment>
            </Nav.Link>

            <Nav.Link>
              <React.Fragment>
                <Login />
              </React.Fragment>
            </Nav.Link>
            <Nav.Link>
              <React.Fragment>
                <Carrito />
              </React.Fragment>
            </Nav.Link>
            <Nav.Link>
              <React.Fragment>
                <Contacto />
              </React.Fragment>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Navigation
