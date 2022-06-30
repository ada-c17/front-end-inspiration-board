import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  return (
    <div>
      <Board title={props.title} owner={props.owner} />
    </div>
  );
};

BoardList.propTypes = {};

export default BoardList;
