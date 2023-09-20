npx create-react-app modern-navbar-app
cd modern-navbar-app
npm install react-bootstrap styled-components


// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #333;
  color: #fff;
`;

const NavItem = styled(Nav.Link)`
  color: #fff;
  margin-right: 20px;
  &:hover {
    color: #ff6347;
  }
`;

const AppNavbar = () => {
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default AppNavbar;
