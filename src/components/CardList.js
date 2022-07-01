import React from "react";
import Card from "./Card";

// Props needs to have the onLike function
const CardList = (props) => {
  return <Card onLike={props.likeFx} />;
};

export default CardList;
