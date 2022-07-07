import { Fragment, useEffect, useState } from "react";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import { Col, Button, Form, FormControl, Container, Row } from 'react-bootstrap';
import GrupoCard from "./components/GrupoCard";


function App() {
  //let registro = JSON.parse(localStorage.getItem("usuariosRegistrados"));
  //if (!registro) {
  //  registro = [];
  //};
  //const [usuariosRegistrados, setUsuariosRegistrados] = useState(registro);
  //useEffect(() => {
  //  //codigo que se ejecuta cuando cambia el estado de la variuable.
  //  if (registro){ // si existe el almacenamiento local registro.
  //    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));  // actualizamos el almacenamiento local. stringify convierte el objeto a string.
  //  }else{// si no existe el almacenamiento local registro.
  //    localStorage.setItem("usuariosRegistrados", JSON.stringify([]));// creamos un almacenamiento local vacio.
  //  };
  //}, [registro]);//la variable a observar.
//
  // Creamos un state para las peliculas
  const [busqueda, setBusqueda] = useState("https://api.themoviedb.org/3/movie/popular?api_key=7d83be0ccc6bcb1703f785a21f52ecea&language=en-US&page=1");
  const [peliculas, setPeliculas] = useState([]);
  const url1 = `https://api.themoviedb.org/3/search/movie?api_key=7d83be0ccc6bcb1703f785a21f52ecea&query=${busqueda}`;
  // funcion que consulta a la API por una determinada pelicula.
  const consultarPeliculaAPI = async (url) => {
    try {           // el try es para que no de error si no hay respuesta de la API.
      const respuestaAPI = await fetch(url);
      const listaPeliculas = await respuestaAPI.json();
      setPeliculas(listaPeliculas.results);
    }
    catch (error) {
      console.log(error);
    }
  }
  const buscarPelicula = (nombrePelicula) => {
    if (busqueda !== "" && nombrePelicula !== null) {
      setBusqueda(nombrePelicula);
      consultarPeliculaAPI(url1);
    }
  }
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  }
  useEffect(() => {
    consultarPeliculaAPI(busqueda);
  });

  return (
    <Fragment >
      <Container
        style={{
          top: 0,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row className="App-header">
          <Col>
            <Header />
          </Col>
          <Col className="Button">
            <Form className="d-flex"  >
              <FormControl
                type="search"
                placeholder="Buscar Pelis"
                className="me-2"
                aria-label="Buscar"
                id="inputBuscar"
                onChange={handleChange}
              />
              <Button
                variant="secondary"
                id="buscar"
                type="button"
                onClick={() => buscarPelicula(busqueda)}
              >
                Buscar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <GrupoCard peliculas={peliculas} />
      <Footer />
    </Fragment>
  );
}
export default App;
