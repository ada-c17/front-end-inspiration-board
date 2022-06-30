import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  const boardComponents = props.boardData.map((board) => {
    <Board title={board.title} owner={board.owner} />;
  });

  return <div>{boardComponents}</div>;
};

BoardList.propTypes = {};

export default BoardList;
