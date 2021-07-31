import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Nav = () => (
  <Navbar className="justify-content-center" bg="light">
    <Container>
      <Navbar.Brand>
        <img
          alt=""
          src="./catbird.png"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default Nav;