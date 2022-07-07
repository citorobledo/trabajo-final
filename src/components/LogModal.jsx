import {Fragment, React, useState} from "react";
import { Modal, Button, Form } from 'react-bootstrap';


  function Modall({mostrar, saludo}) {
    let registro = JSON.parse(localStorage.getItem("usuariosRegistrados"));
    
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    function ingresar(email, contraseña) {
      if (email !== "" && contraseña !== "") {
        const usuario = registro.find(usuario => usuario.email === email && usuario.password === contraseña)
        try {
          if (usuario.email == email && usuario.password == contraseña) {
            saludo("!Hola " + usuario.email.slice(0, 7)+"..");
            mostrar(false);
          }
        } catch (error) {
          window.alert("Usuario o contraseña incorrectos");
        }

      }
    }
    const usuarioChange = (e) => {
      setUsuario(e.target.value);
    }
    const contraseñaChange = (e) => {
      setContraseña(e.target.value);
    }
    return (
      <Fragment>
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
                  onChange={usuarioChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa tu Contraseña </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="***********"
                  autoFocus
                  onChange={contraseñaChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className=" m-1" variant="secondary" onClick={() => mostrar(false)}>
              Cerrar
            </Button>
            <Button className=" m-1" variant="primary" onClick={() => ingresar(usuario, contraseña)}>
              Entrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
  export default Modall;