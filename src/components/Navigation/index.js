import React from 'react';
import { Nav } from 'react-bootstrap';

function Navigation() {

  return (
<header>
  <h2>
    <a href="/">
      Charity's Portfolio
    </a>
  </h2>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/about">About me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/resume">Resume</Nav.Link>
    </Nav.Item>
  </Nav>
</header>
  );
}

export default Navigation;