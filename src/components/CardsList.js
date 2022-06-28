import React from "react";
import Cards from "./Cards";

const CardsList = ({ cardData }) => {
  const createCard = (card) => {
    return (
      <div>
        <Cards
          key={card.card_id}
          message={card.message}
          likesCount={card.likes_count}
        />
      </div>
    );
  };

  return <div>{cardData.map(createCard)}</div>;
};

export default CardsList;
