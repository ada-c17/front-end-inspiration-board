import React from "react";
import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ data, setLikesCountCallBack, deleteCardCallBack }) => {
  const cardComponents = data.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      message={card.message}
      likesCount={card.likesCount}
      setLikesCountCallback={setLikesCountCallBack}
      deleteCardCallBack={deleteCardCallBack}
    />
  ));

  return (
    <div>
      <h2 className="cardList"> List of Cards</h2>
      {cardComponents}
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.array.isRequired,
  setLikesCountCallBack: PropTypes.func.isRequired,
  deleteCardCallBack: PropTypes.func.isRequired,
};

export default CardList;
