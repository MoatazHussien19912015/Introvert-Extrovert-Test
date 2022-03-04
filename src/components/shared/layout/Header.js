import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" data-toggle="pill" to="/">
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" data-toggle="pill" to="/ask">
              Test
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
