import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/CardList.css";

const CardList = (props) => {
  const [sortType, setSortType] = useState("id");
  const [cardData, setCardData] = useState(props.cardData);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        cardId: "cardId",
        message: "message",
        likesCount: "likesCount",
      };
      const sortProperty = types[type];
      let sorted;
      if (sortProperty === "message") {
        sorted = props.cardData.sort((a, b) =>
          a[sortProperty].localeCompare(b[sortProperty])
        );
      } else {
        sorted = props.cardData.sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );
      }
      setCardData(sorted);
    };
    sortArray(sortType);
  }, [sortType, props.cardData]);

  const cardComponents = cardData.map((card) => {
    return (
      <Card
        id={card.cardId}
        message={card.message}
        likeCount={card.likesCount}
        onAddLike={props.onAddLike}
        onDeleteCard={props.onDeleteCard}
      />
    );
  });

  return (
    <section className="card-list">
      <div className="sort-by-label">
        <label>Sort By: </label>
        <select onChange={(event) => setSortType(event.target.value)}>
          <option value="cardId">New</option>
          <option value="message">Alphabetical</option>
          <option value="likesCount">Most Liked</option>
        </select>
      </div>
      <div className="cards">{cardComponents}</div>
    </section>
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddLike: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default CardList;
