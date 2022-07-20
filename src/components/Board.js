import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  // const getCardsforBoard = (board_id) => {
  //     props.selectBoardCallback(board_id);
  //   };

  const title = props.title;
  const owner = props.owner;
  const boardId = props.id;

  return (
    <div className="board">
      <div onClick={() => props.selectBoardCallback(boardId)}>
        <h1>Title: {title}</h1>
        <h2>Owner: {owner}</h2>
      </div>
      <button onClick={() => props.deleteBoardCallback(boardId)}>X</button>
    </div>
  );
};

Board.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  selectBoardCallback: PropTypes.func.isRequired,
  deleteBoardCallback: PropTypes.func.isRequired,
};

export default Board;
