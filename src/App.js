import { Fragment, useEffect, useState, useSelector } from "react";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Col, Button, Body, CardGroup } from 'react-bootstrap';
import peliculas from "./components/Header";
import GrupoCard from "./components/GrupoCard";


function App() {
  // Creamos un state para las peliculas
  const [busqueda, setBusqueda] = useState();
  console.log(busqueda);
  const [peliculas, setPeliculas] = useState([]);
  console.log(peliculas);
  
  

  // funcion que consulta a la API por una determinada pelicula.
  const consultarPeliculaAPI = async () => {
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7d83be0ccc6bcb1703f785a21f52ecea&query=${busqueda}`;
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
      consultarPeliculaAPI();
      }
  }

  return (
    <Fragment>
      <Header />
      <GrupoCard peliculas={peliculas} />
      <Button
        variant="secondary"
        type="button"
        onClick={() => buscarPelicula("batman")}
      >Buscar pelicula
      </Button>
      <Footer />
    </Fragment>
  );
}

export default App;
