import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const title = props.title;
  const owner = props.owner;
  return <div></div>;
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
