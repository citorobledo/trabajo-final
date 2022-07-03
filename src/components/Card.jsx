import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import  {React, useState}from 'react'

const Tarjeta = ({unaPelicula}) => {
//para traer una imagen de una pelicula hay que poner la base https://image.tmdb.org/t/p/w500 + poster_path
// el tamaño se maneja con el parametro w500
  const portada = "https://image.tmdb.org/t/p/w400" + unaPelicula.poster_path;

  return (
    <CardGroup className='App-Card'>
      <Card >
        <Card.Body>
          <Card.Title>{unaPelicula.title} </Card.Title>
          <Card.Img alt={unaPelicula.title} src={portada} />
          <Card.ImgOverlay>
            
          </Card.ImgOverlay>
          <Card.Text>
            {unaPelicula.overview}
          </Card.Text>

        </Card.Body>
      </Card>
    </CardGroup>
  )
};
export default Tarjeta;