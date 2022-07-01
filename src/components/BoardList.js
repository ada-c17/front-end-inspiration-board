import PropTypes from "prop-types";
import Board from "./Board";

//change CSS

const BoardList = ({ boards }) => {
  const boardArray = boards.map((board, index) => {
    return (
      <li>
        <Board
          key={board.boardId}
          boardId={board.boardId}
          title={board.title}
          owner={board.owner}
          cards={board.cards}
          //{eventHandlerFunction}
          //{eventHandlerFunction}
        />
      </li>
    );
  });
  return (
    <>
      <section>{boardArray}</section>
    </>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
