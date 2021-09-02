import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {

  return (
<header>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/about">Charity Rogers</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/about">About Me</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
    </Nav>
  </Navbar>
</header>
  );
}

export default Navigation;