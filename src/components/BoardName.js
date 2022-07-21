import "./Board.css";
import PropTypes from "prop-types";

const BoardName = (props) => {
  const passBoardId = () => {
    props.boardInfoCallback(props.id, props.title)
  }; 

  return (
    <div>
      <div>
        <li onClick={passBoardId}> {props.title}</li>
      </div>
    </div>
  );
};

BoardName.propTypes = {
  title: PropTypes.string.isRequired,
  boardInfoCallback: PropTypes.func.isRequired,
};

export default BoardName;
