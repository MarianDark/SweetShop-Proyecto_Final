// Header.jsx (utilizando react-bootstrap y react-router-dom)
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { SweetShopContext } from "../context/SweetShopContext";
import "./Header.css"; // Asegúrate de importar tu archivo CSS si es necesario

const Header = () => {
  const { user, logout } = useContext(SweetShopContext);

  const handleLogout = () => {
    logout(); // Llama a la función logout del contexto para cerrar sesión
  };

  return (
    <div className="header">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src="/img/logosweetshop.png" alt="SweetShop Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-item">
                Inicio✨
              </Nav.Link>
              <Nav.Link as={Link} to="/productos" className="nav-item">
                Productos🍭
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="nav-item">
                Carrito🛒
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item">
                Contacto📮
              </Nav.Link>
            </Nav>

            <Nav className="btn-nav">
              {user ? (
                <ul>
                  <li className="btn-nav-item">
                    <Link
                      className="btn btn-option-user btn-option-user-first"
                      to="/perfil"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li className="btn-nav-item">
                    <Link
                      className="btn btn-option-user"
                      to="/"
                      onClick={handleLogout} // Llama a handleLogout al hacer clic en Cerrar sesión
                    >
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className="btn-nav-item">
                    <Link
                      className="btn btn-option-user btn-option-user-first"
                      to="/register"
                    >
                      Registro
                    </Link>
                  </li>
                  <li className="btn-nav-item">
                    <Link className="btn btn-option-user" to="/login">
                      Iniciar sesión
                    </Link>
                  </li>
                </ul>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
