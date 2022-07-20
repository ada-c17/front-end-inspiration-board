import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  // const getCardsforBoard = (board_id) => {
  //   props.selectBoardCallback(board_id);
  // };

  const boardComponents = props.boardData.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        selectBoardCallback={props.selectBoardCallback}
        deleteBoardCallback={props.deleteBoardCallback}
        // onClick={getCardsforBoard(board.id)}
      />
    );
  });

  return <div className="boardList">{boardComponents}</div>;
};

BoardList.propTypes = {
  boardData: PropTypes.array.isRequired,
  selectBoardCallback: PropTypes.func.isRequired,
  deleteBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
