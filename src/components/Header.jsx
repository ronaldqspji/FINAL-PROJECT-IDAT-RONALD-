import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '/src/img/ronald1.png';

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
          style={{ marginRight: '15px'}}
        />RONALD E-COMMERCE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
