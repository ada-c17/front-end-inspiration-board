import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";

const CardsList = ({ cardData, likeHeart }) => {
  // console.log("card data: ", cardData);
  const createCard = (card) => {
    // console.log(`cardID: ${card.card_id}`);
    return (
      <div>
        <Cards
          cardId={card.id}
          message={card.message}
          likesCount={card.likes_count}
          likeHeart={likeHeart}
        />
      </div>
    );
  };

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {cardData.map(createCard)}
    </Row>
  );
};

export default CardsList;