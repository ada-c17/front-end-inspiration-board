import React from "react";
// import PropTypes from "prop-types";
import Card from "./Card";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import NewCardForm from "./NewCardForm.js";
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

  return (
    <section className="cards__container">
      <div>
        <h2>Card for {props.selectedBoard.title}</h2>
        <br />
        <select id="sort-button" onChange={props.sortCards}>
          <option value="" key="">
            select
          </option>
          <option value="Sort by ID" key="sort by id">
            ID
          </option>
          <option value="Sort Alphabetically" key="sort by Alphabetically">
            Alphabetically
          </option>
          <option value="Sort by Number of Likes" key="sort by likes">
            Likes
          </option>
        </select>
        <div className="cards_list_no_bullets">{cardComponents}</div>
      </div>
    </section>
  );
};

// CardsList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
export default CardsList;
