import {Fragment, React, useEffect, useState} from "react";
import { Modal, Button, Form } from 'react-bootstrap';


  function RegistroModal({mostrar}) {
    // inicializamos almacenamiento local.
    let registro = JSON.parse(localStorage.getItem("usuariosRegistrados"));
    const [usuariosRegistrados, setUsuariosRegistrados] = useState(registro);
   
    if (!registro) {
      registro = [];
    };
    
    useEffect(() => {
      //codigo que se ejecuta cuando cambia el estado de la variuable.
      if (registro){ // si existe el almacenamiento local registro.
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));  // actualizamos el almacenamiento local. stringify convierte el objeto a string.
      }else{// si no existe el almacenamiento local registro.
        localStorage.setItem("usuariosRegistrados", JSON.stringify([]));// creamos un almacenamiento local vacio.
      };
    }, [registro]);//la variable a observar.
    
    // funcion que mete un usuario en la lista de usuariosRegistrados.
    const agregarUsuario = (usuario) => {
      
      setUsuariosRegistrados([...usuariosRegistrados, usuario])// los ... son para que no se pierda el array original.
    };

    // funcion que elimina un usuario de la lista de usuariosRegistrados.
    const eliminarUsuario = (usuario) => {
      setUsuariosRegistrados(usuariosRegistrados.filter(u => u.id !== usuario.id));
      console.log(usuario)
      console.log(registro)
    };

    const [user, setUser] = useState({
      email: "",
      password: "",
      rePassword: ""
    });
   // creo un state para el mensaje de error.
    const [error, setError] = useState(false);
    // extraemos los valores de los user.
    const {email, password, rePassword} = user;
    // recibimos lo que el usuario ingresa en los inputs.
    const onChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value })};
    // funcion para cuando se envia el formulario.
    const onSubmit = (e) => {
      e.preventDefault();
      // validamos que no haya campos vacios.
      if (email.trim() ==="" || password.trim() === "" || rePassword.trim() === "") { //el trim quita los espacios en blanco.
        setError(true);
        return;
      }
      // quitar el mensaje de error.
      setError(false);
      // agregar un usuario.
      agregarUsuario(user)
      // limpiar el formulario.      
      setUser({email: "", password: "", rePassword:""});
      //mostrar(false) //si habilito este campo, no me guarda el usuario en el localStorage.
    }

    return (
      <Fragment>
        <Modal show={mostrar} onHide={false}>
          <Modal.Header
            closeButton
            onClick={() => mostrar(false)}
          >
            <Modal.Title>Registrate en TodoPelis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={onSubmit}
            >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Ingresa tu Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nombre@Host.com"
                  autoFocus
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa tu Contraseña </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="***********"
                  autoFocus
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Repeti tu Contraseña </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="***********"
                  autoFocus
                  name="rePassword"
                  value={rePassword}
                  onChange={onChange}
                />
              </Form.Group>
            </Form>
            {error ? <p>Todos Los Campos Son Obligatorios!!!</p> : null}
          </Modal.Body>
          <Modal.Footer>
            <Form onSubmit={onSubmit}>
              <Button className=" m-1" variant="secondary" onClick={() => mostrar(false)}>
                Cerrar
              </Button>
              <Button className=" m-1" variant="primary" type="submit"  >
                Registrar
              </Button>
            </Form>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
  export default RegistroModal;