import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardsList = (props) => {
  const cardComponents = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        cardInfo={card}
        deleteCardCallback={props.deleteCardCallback}
        likeCardCallback={props.likeCardCallback}
        board_id={props.board_id}
      />
    );
  });

  const sortCards = (e) => {
    props.updateSortTypeCallback(e.target.value);
  };

  return (
    <section className="cards__container">
      <div>
        <h2>Card for {props.selectedBoard.title}</h2>
        <br />
        <select id="sort-button" onChange={sortCards}>
          <option value="id" key="">
            select
          </option>
          <option value="id" key="sort by id">
            ID
          </option>
          <option value="message" key="sort by Alphabetically">
            Alphabetically
          </option>
          <option value="likes_count" key="sort by likes">
            Likes
          </option>
        </select>
        <div className="cards_list_no_bullets">{cardComponents}</div>
      </div>
    </section>
  );
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      likes: PropTypes.number,
    })
  ).isRequired,
  onLike: PropTypes.func,
  onDelete: PropTypes.func,
};
export default CardsList;