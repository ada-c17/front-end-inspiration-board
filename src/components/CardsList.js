import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./stylesheet/CardList.css";

const CardsList = ({ cardData, likeHeart, deleteCard, handleLike }) => {
  // console.log("card data: ", cardData);

  return (
    <Row xs={1} md={2} lg={3} className="g-4 cardsList">
      {cardData.map((card) => (
        <div key={card.id}>
          <Cards
            cardId={card.id}
            message={card.message}
            likesCount={card.likes_count}
            likeHeart={likeHeart}
            handleLike={handleLike}
            deleteCard={deleteCard}
          />
        </div>
      ))}
    </Row>
  );
};

export default CardsList;
