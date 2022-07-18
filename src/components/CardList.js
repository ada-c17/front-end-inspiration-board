import React from "react";
import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({
  data,
  deleteCardCallBack,
  setLikesCountCallBack,
  updatePos,
}) => {
  const cardComponents = data.map((card, index) => (
    <Card
      key={card.id}
      index={index}
      id={card.id}
      message={card.message}
      color={card.color}
      PosX={card.PosX}
      PosY={card.PosY}
      likesCount={card.likes_count}
      updatePos={updatePos}
      setLikesCountCallBack={setLikesCountCallBack}
      deleteCardCallBack={deleteCardCallBack}
    />
  ));

  return <div>{cardComponents}</div>;
};

CardList.propTypes = {
  cardListData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      data: PropTypes.array.isRequired,
      setLikesCountCallBack: PropTypes.func.isRequired,
      deleteCardCallBack: PropTypes.func.isRequired,
    })
  ),
};

export default CardList;
