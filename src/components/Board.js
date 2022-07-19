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
    <div onClick={() => props.selectBoardCallback(boardId)}>
      <h1>{title}</h1>
      <h2>{owner}</h2>
    </div>
  );
};

Board.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  selectBoardCallback: PropTypes.func.isRequired,
};

export default Board;
