import BoardList from "./BoardList";
import PropTypes from "prop-types";
import "./BoardList.css";
import NewBoardButton from "./NewBoardButton";

const BoardsView = (props) => {
  return (
    <div>
      <h1>Inspiration Board!</h1>
      <BoardList
        boardData={props.boardData}
        selectBoardCallback={props.selectBoardCallback}
        deleteBoardCallback={props.deleteBoardCallback}
      />
      <NewBoardButton makeBoardCallback={props.makeBoardCallback} />
    </div>
  );
};

BoardsView.propTypes = {
  boardData: PropTypes.array.isRequired,
  selectBoardCallback: PropTypes.func.isRequired,
  deleteBoardCallback: PropTypes.func.isRequired,
  makeBoardCallback: PropTypes.func.isRequired,
};

export default BoardsView;
