import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Cards = ({ cardId, message, likesCount, likeHeart, deleteCard }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteCard(cardId)}
          />
          {message}
        </Card.Body>
        <Card.Footer>
          <FontAwesomeIcon icon={likeHeart} /> {likesCount}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;
