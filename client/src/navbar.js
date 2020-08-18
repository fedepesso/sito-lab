import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import './style.css';


export function DefaultNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" Style='margin : 0px 0px 0px 0px'>
      <Navbar.Brand href="#home">Esperienze di Laboratorio</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Primo anno</Nav.Link>
        <Nav.Link href="#features">Secondo anno</Nav.Link>
        <Nav.Link href="#features">Terzo anno</Nav.Link>
        <Nav.Link href="#features">Quarto anno</Nav.Link>
        <Nav.Link href="#features">Quinto anno</Nav.Link>
      </Nav>
    </Navbar>)
}