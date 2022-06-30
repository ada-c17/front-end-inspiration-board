import "./Board.css";
import PropTypes from "prop-types";

const Board = (props) => {
  return (
    <div>
      <ul>
        <li>Title: {props.title} </li>
        <li>Owner :{props.owner}</li> 
      </ul>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Board;
