import React from "react";
import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ data }) => {
  const cardComponents = data.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      message={card.message}
      likes_count={card.likes_count}
    />
  ));

  return (
    <div>
      <h2 className="cardList"> List of cards</h2>
      {cardComponents}
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardList;
