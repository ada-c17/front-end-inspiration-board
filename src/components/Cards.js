import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

const Cards = ({ cardId, message, likesCount }) => {
  return (
    <div>
      <h1> Hello</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Title>Board 1</Card.Title>
        <Card.Body>{message}</Card.Body>
        <Card.Footer>
          <FontAwesomeIcon icon="fa-regular fa-heart" /> {likesCount}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;
