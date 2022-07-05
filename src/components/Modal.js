import {React, useState} from "react";
import { Navbar, Nav,Container, Modal, Button, Form } from 'react-bootstrap';


  function Modall({mostrar}) {
  
  
    return (
      <div>
        <Modal show={mostrar} onHide={false}>
          <Modal.Header 
          closeButton
          onClick={() => mostrar(false)}
          >
            <Modal.Title>Entrar a TodoPelis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa tu Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nombre@Host.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa tu Contraseña </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="***********"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>mostrar(false)}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={()=>mostrar(false)}>
              Entrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default Modall;