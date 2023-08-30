import { Fragment } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../images/logo.JPG'
import Carrito from '../../pages/Carrito/Carrito'
import Login from '../../pages/Login/Login'
import Logout from '../../pages/Login/Logout'
import Buscar from '../../pages/Buscar/Buscar'
import Registro from '../../pages/Registro/Registro'
import MiPerfil from '../../pages/MiPerfil/MiPerfil'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import CategoryIcon from '@mui/icons-material/Category'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  const { token } = useContext(GlobalContext)
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
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} color='primary' to='/Familias'>
            <CategoryIcon color='primary' fontSize='large' />
            CATALOGO DE PRODUCTOS
          </Nav.Link>
          <Fragment>
            <Buscar />
          </Fragment>

          <Fragment>{token === '' ? <Registro /> : <MiPerfil />}</Fragment>
          <Fragment>{token === '' ? <Login /> : <Logout />}</Fragment>
          <Fragment>
            <Carrito />
          </Fragment>
        </Nav>
      </Navbar>
    </div>
  )
}
export default Navigation
