import React from "react";
import CardList from "./CardList";

const Board = (props) => {
  // Should we store Card data here? const [cardData, setCardData] = useState({}); Would then need to use useEffect to run an update function after render to updateCards (a fx to get cards of the board using the get cards route and then setCardData to that response). We could then pass through, ugh, not sure if this is needed.
  return <CardList likeFx={props.cardLike} />;
};

export default Board;
