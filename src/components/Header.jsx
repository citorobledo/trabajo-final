import {React, useState} from "react";
import "../estilo.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../App.js";  
import Modall from "./LogModal.jsx";
import  RegistroModal from "./RegistroModal.jsx";

const Header = () => {
 // state del modal
 const [estadoModal, setEstadoModal] = useState(false);
 const [registroModal, setRegistroModal] = useState(false);
 // state del login
  const [saludoUsuario, setSaludoUsuario] = useState("");

  return (
    <Navbar expand="lg" variant="dark" >
      <Container >
        <Navbar.Brand href="#"
          style={
            {
              fontSize: "30px",
              fontWeight: "bold",
              border: "2px solid #fff",
              borderRadius: "10px",
              padding: "8px",
            }
          }
        >Todo Pelis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link onClick={() => setEstadoModal(true)}
            >Login</Nav.Link>
            <Nav.Link onClick={() => setRegistroModal(true)}
            >Registrate</Nav.Link>
            <Nav.Link href="#action4">Mis Favoritas</Nav.Link>
            <Navbar class="navbar">{saludoUsuario}</Navbar>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {estadoModal && <Modall mostrar={setEstadoModal} saludo={setSaludoUsuario} />}
      {registroModal && <RegistroModal mostrar={setRegistroModal} />}

    </Navbar>    
  );  
}
export default Header;

