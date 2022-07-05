import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "../estilo.css";


const GrupoCard = ({peliculas}) => {
  return (
    <CardGroup className="Card-grup">
      {peliculas.map((unaPelicula) => (
        <Card className="Card">
          <Card.Body className = "Card-Body">
            <Card.Title>{unaPelicula.title} </Card.Title>
            <Card.Img alt={unaPelicula.title} src={`https://image.tmdb.org/t/p/w500${unaPelicula.poster_path}`} />
            <Card.Text>
              <h5 className="h5">Lanzamiento   {unaPelicula.release_date}</h5>
              <h5 className="h5">Puntuación   {unaPelicula.vote_average}</h5>
              {unaPelicula.overview}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
}
export default GrupoCard;