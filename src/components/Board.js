import PropTypes from "prop-types";
import CardList from "./CardList";

//props-> specific board instance based on which board is selected
//props-> {board: boardId, owner: owner, title: title, cards: [card, card, card]}
//how to access cards in board object?
//previously objects were [{}, {}, {}]
//when clicked on (button), it will pass the board id as param into event handler function that lives in app,
//<Link to="/boards/:boardId" className="choose-board">

const Board = (props) => {
  return (
    <div>
      <button>{props.title}</button>

      <CardList cards={props.cards} boardId={props.boardId} />
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
  cards: PropTypes.array,
};
export default Board;

//links can be embedded in board selection, which rendered in board list?
