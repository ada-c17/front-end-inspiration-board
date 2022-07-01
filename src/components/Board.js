import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const title = props.title;
  const owner = props.owner;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{owner}</h2>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
