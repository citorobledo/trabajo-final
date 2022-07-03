import {React, Img} from "react";
import { Col, Button, Row, Container } from 'react-bootstrap';



const Footer = () => {
  return (
    <footer className="App-footer" >
      <Container className="App-Container">
        <Row >
          <Col>
          <h3>Esenciales</h3>
          <ul>
            <li><a href="#!">Acerca de Todo-Pelis</a></li>
            <li><a href="#!">Contáctanos</a></li>
            <li><a href="#!">Foros de Assitencia</a></li>
            <li><a href="#!">Estado del sistema</a></li>
          </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>Involucrarse</h3>
          <ul>
            <li><a href="#!">Guía de Contribuciones</a></li>
            <li><a href="#!">Formar parte de Todo-Pelis</a></li>
            <li><a href="#!">Hacer Una Reseña</a></li>
            <li><a href="#!">Aca Falta Una Pelicula</a></li>
          </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://facebook.com">FaceBook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://twitter.com/?lang=es">Twitter</a></li>
            <li><a href="https://www.whatsapp.com/?lang=es">WhatsApp</a></li>
          </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>Legales</h3>
          <ul>
            <li><a href="#!">Términos de Uso</a></li>
            <li><a href="#!">Términos de Licencia</a></li>
            <li><a href="#!">Política de privacidad</a></li>
          </ul>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
}
export default Footer;