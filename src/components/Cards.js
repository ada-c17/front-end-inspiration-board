import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./stylesheet/Cards.css";

const Cards = ({
  cardId,
  message,
  likesCount,
  likeHeart,
  handleLike,
  deleteCard,
}) => {
  const likeClick = () => {
    handleLike(cardId);
  };
  return (
    <div>
      <Card style={{ width: "17.5rem" }}>
        <Card.Header className="card-header">
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteCard(cardId)}
            className="card-trash-can"
          />
        </Card.Header>
        <Card.Body className="card-body">{message}</Card.Body>
        <Card.Footer className="class-footer">
          <FontAwesomeIcon
            icon={likeHeart}
            onClick={likeClick}
            className="heart"
          />{" "}
          {likesCount}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;
