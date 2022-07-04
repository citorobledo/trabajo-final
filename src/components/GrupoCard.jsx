import React from "react";
import { CardGroup, Card } from "react-bootstrap";


const GrupoCard = ({peliculas}) => {
  return (
    <CardGroup className="App-Body" >
      {peliculas.map((unaPelicula) => (
        <Card className="App-Card">
          <Card.Body >
            <Card.Title>{unaPelicula.title} </Card.Title>
            <Card.Img alt={unaPelicula.title} src={`https://image.tmdb.org/t/p/w500${unaPelicula.poster_path}`} />
            <Card.Text>
              {unaPelicula.overview}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
}
export default GrupoCard;