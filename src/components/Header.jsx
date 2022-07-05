import {React, useState} from "react";
import "../estilo.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../App.js";  
import Modall from "./Modal.js";















const Header = () => {

 // state del modal
 const [estadoModal, setEtadoModal] = useState(false);


  return (
    <Navbar expand="lg"   variant="dark" >
      <Container >
        <Navbar.Brand href="App.js"
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
            <Nav.Link href="App.js">Home</Nav.Link>
            <Nav.Link 
            onClick={() => setEtadoModal(true)}
          
            
            >Login</Nav.Link>
            <Nav.Link href="#action3">Registrate</Nav.Link>
            <Nav.Link href="#action4">Mis Favoritas</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>

      {estadoModal && <Modall mostrar={setEtadoModal}/>}



    </Navbar>    
  );  
}
export default Header;

