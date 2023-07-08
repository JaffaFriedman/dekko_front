import * as React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo.JPG";
import Carrito from "../../pages/Carrito/Carrito";
import Login from "../../pages/Login/Login";
import Buscar from "../../pages/Buscar/Buscar";
import Contacto from "../../pages/Contacto/Contacto";
import tablaFamilias from "../../pages/Familias/Tablafamilias";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const handleFamilia = (f) => {

 //   setFamilia(f);
 
    navigate("/Catalogo");
  };

  return (
    <div className="ps-5">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link as={NavLink} to="/Nosotros">
              QUIENES SOMOS
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {tablaFamilias.map((p, idx) => (
              <Nav.Item p={p} key={idx}>
                <Button
                  variant="text"
                  onClick={() => handleFamilia(p.familia)}
                > {p.familia}
                </Button>
              </Nav.Item>
            ))}
          </Nav>
          <Nav className="me-auto">
            <Nav.Link>
              <React.Fragment>
                <Buscar />
              </React.Fragment>
            </Nav.Link>
            <Nav.Link>
              <React.Fragment>
                <Contacto />
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
            <NavDropdown title="Desarrollo">
              <NavDropdown.Item as={NavLink} to="/Checkout">
                Checkout
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Pago">
                Pago
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/perfil">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/migas">
                Migas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/construccion">
                Construccion
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/prueba">
                Prueba
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
};
export default Navigation;
