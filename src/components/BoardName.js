import "./Board.css";
import PropTypes from "prop-types";

const BoardName = (props) => {
  const passBoardId = () => {
    props.boardIdCallback(props.id, props.title)
  }; 

  return (
    <div>
      <div>
        <li onClick={passBoardId}> Title: {props.title}</li>
      </div>
    </div>
  );
};

BoardName.propTypes = {
  title: PropTypes.string.isRequired,
  boardIdCallback: PropTypes.func.isRequired,
};

export default BoardName;
