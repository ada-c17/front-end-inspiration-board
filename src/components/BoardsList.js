import PropTypes from "prop-types";
import Board from "./Board.js";

const BoardsList = (props) => {
  const boardComponent = props.boards.map((board) => {
    return <Board title={board.title} owner={board.owner} />;
  });
  return (
    <div>
      <h1> Boards</h1>
      {boardComponent}
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.array.isRequired,
};
export default BoardsList;
