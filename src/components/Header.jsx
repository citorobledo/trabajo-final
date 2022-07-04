import {React, useEffect, useState} from "react";
import "../estilo.css";
import { Navbar, Nav, Form, FormControl, Button,Container } from 'react-bootstrap';
import setBusqueda from "../App.js";
import buscarPelicula from "../App.js";


const Header = () => {
  
 
 
  return (
    <Navbar className="App-header" expand="lg" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Todo Pelis</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Login</Nav.Link>
            <Nav.Link href="#action3">Recomendadas</Nav.Link>
            <Nav.Link href="#action4">Mis Favoritas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar Pelis"
              className="me-2"
              aria-label="Buscar"
              id="inputBuscar"
            />
            <Button
             variant="secondary" 
             id="buscar" 
             type="button"
       
             >
               Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  );  
}
export default Header;

