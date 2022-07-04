import React from "react";
import { CardGroup, Card } from "react-bootstrap";


const GrupoCard = ({peliculas}) => {
  return (
    <CardGroup className="Card-grup" >
      {peliculas.map((unaPelicula) => (
        <Card className="Card">
          <Card.Body className = "Card-Body">
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