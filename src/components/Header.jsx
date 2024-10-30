//import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '/src/img/ronald1.png';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
        <img
          src={logo}
          alt="Ecommerce Logo"
          width="75"
          height="75"
          className="d-inline-block align-top"
          style={{ marginRight: '15px' }}
        />
        RONALD E-COMMERCE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i> Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

