import PropTypes from "prop-types";
import { React } from "react";
import Card from "./Card";

//props is an array of objects of card instances for a particular board
//cardList gets rendered in a specific page
const CardList = ({ cards, boardId }) => {
  //useEffect() -> when pages loads (boardId), makes an API call to boards/<boardId>/cards-> endpoint
  const cardListArray = cards.map((card) => {
    return (
      <div>
        <Card
          message={card.message}
          cardId={card.cardId}
          key={card.cardId}
          liked={card.likesCount}
          boardId={card.boardId}
        />
      </div>
    );
  });
  return (
    <section>
      <h2>Cards List</h2>
      <ul>{cardListArray}</ul>
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardList;
