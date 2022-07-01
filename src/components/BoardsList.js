import PropTypes from "prop-types";
import Board from "./Board.js";

const BoardsList = (props) => {
  const boardComponent = props.boards.map((board) => {
    return <Board 
              key={board.id}
              id={board.id}
              title={board.title} 
              owner={board.owner}
              cards={props.cards}
              cardsCallback={props.cardsCallback}
              />;
  });
  return (
    <div>
      <h1>Boards</h1>
      <ol>
        {boardComponent}
      </ol>
      
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.array.isRequired,
};
export default BoardsList;
