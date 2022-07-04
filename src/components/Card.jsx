import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import  {React, useState}from 'react'

const Tarjeta = ({unaPelicula}) => {
//para traer una imagen de una pelicula hay que poner la base https://image.tmdb.org/t/p/w500 + poster_path
// el tamaño se maneja con el parametro w500
  const [poster, setPoster] = useState(`https://image.tmdb.org/t/p/w500${unaPelicula.poster_path}`);
  
 if (unaPelicula == undefined) {
    return (
      <CardGroup className='App-Card'>
      <Card >
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Img />
          <Card.ImgOverlay>
            
          </Card.ImgOverlay>
          <Card.Text>
            <h1>No hay peliculas</h1>
          </Card.Text>

        </Card.Body>
      </Card>
      </CardGroup>
    )
  }
  else {

  return (
    <CardGroup className='App-Card'>
      <Card >
        <Card.Body>
          <Card.Title>{unaPelicula.title} </Card.Title>
          <Card.Img alt={unaPelicula.title} src = {poster} />
          <Card.Text>
            {unaPelicula.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  )}
};
export default Tarjeta;