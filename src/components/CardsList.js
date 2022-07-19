import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardsList = (props) => {
  const cardComponents = props.cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        cardInfo={card}
        deleteCardCallback={props.deleteCardCallback}
        likeCardCallback={props.likeCardCallback}
        board_id={props.board_id}
      />
    );
  });

  return (
  <section className='cards__container'>
    <div>
      <h2>Card for {props.selectedBoard.title}</h2>
      <br/>
      <select id="sort-button">
        <option value="Sort by ID">ID</option>
        <option value="Sort Alphabetically">Alphabetically</option>
        <option value="Sort by Number of Likes">Likes</option>
        </select>
      <div className="cards_list_no_bullets">{cardComponents}</div>

    </div>
  </section>
  );
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default CardsList;

