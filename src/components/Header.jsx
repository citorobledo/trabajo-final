import {React} from "react";
import "../estilo.css";
import { Navbar, Nav,Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg"   variant="dark" >
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
        >Todo Pelis</Navbar.Brand>
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
          
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  );  
}
export default Header;

