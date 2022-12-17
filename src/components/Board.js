import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

// const [board, setBoard] = useState({title:"",id:None, owner=""})
const Board = (props) => {
  return (
    <div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>
  );
};

Board.propTypes = {
  onBoardSelect: PropTypes.func.isRequired
}

export default Board;



