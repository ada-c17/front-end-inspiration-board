import PropTypes from "prop-types";
import Board from "./Board";

//change CSS

const BoardList = ({ boards }) => {
  const boardArray = boards.map((board, index) => {
    return (
      <Board
        key={board.boardId}
        boardId={board.boardId}
        title={board.title}
        owner={board.owner}
        //{eventHandlerFunction}
        //{eventHandlerFunction}
      />
    );
  });
  return (
    <>
      <h2>Board Count: {boards.length}</h2>
      <section>{boardArray}</section>
    </>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
