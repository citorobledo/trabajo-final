import { Fragment, useState } from "react";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Col, Button } from 'react-bootstrap';



function App() {

  // Creamos un state para las peliculas
  const [pelicula, setPelicula] = useState({});

  // funcion que consulta a la API por una determinada pelicula.
  const consultarPeliculaAPI = async () => {
    try {           // el try es para que no de error si no hay respuesta de la API.
      const respuestaAPI = await fetch('https://api.themoviedb.org/3/search/movie?api_key=7d83be0ccc6bcb1703f785a21f52ecea&query=Doctor Strange in the Multiverse of Madness');
      const pelicula = await respuestaAPI.json();
      console.log(pelicula.results[0]);
      setPelicula(pelicula.results[0]);
    } 
    catch (error) {
      console.log(error);
    }
  }
//para traer una imagen de una pelicula hay que poner la base https://image.tmdb.org/t/p/w500 + poster_path
// el tamaño se maneja con el parametro w500
  const portada = "https://image.tmdb.org/t/p/w400" + pelicula.poster_path;
  return (
    <Fragment>
      <Header/>
      <div className="App-Body">
        <Card unaPelicula = {pelicula}>
        </Card>  
        <Card unaPelicula = {pelicula}>
        </Card> 
      </div>
        
      <Button 
      variant="secondary"
      onClick={consultarPeliculaAPI}
      >Consultar pelicula
      </Button>
      

      <Footer/>
    </Fragment>
    
  );
}

export default App;
