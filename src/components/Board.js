import React from "react";
import Card from "./Card";

const Board = (props) => {
  return <Card onLike={props.likeFx} />;
};

export default Board;
