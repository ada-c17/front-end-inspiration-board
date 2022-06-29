import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";

const CardsList = ({ cardData, boardCards, likeHeart }) => {
  const createCard = (card) => {
    console.log(`boardCards: ${boardCards}`);
    // console.log(`cardID: ${card.card_id}`);
    return (
      <div>
        <Cards
          key={card.card_id}
          cardId={card.card_id}
          message={card.message}
          likesCount={card.likes_count}
          likeHeart={likeHeart}
        />
      </div>
    );
  };

  return (
    <Row xs={1} md={2} className="g-4">
      {cardData.map(createCard)}
    </Row>
  );
};

export default CardsList;
