import PropTypes from "prop-types";
import BoardName from "./BoardName.js";

const BoardsList = (props) => {
  const boardComponent = props.boards.map((board) => {
    return <BoardName 
              key={board.id}
              id={board.id}
              title={board.title}
              boardInfoCallback={props.boardInfoCallback}
              />;
  });
  return (
    <div>
      <ol  id="EachBoard">
        {boardComponent}
      </ol>
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.array.isRequired,
  boardInfoCallback: PropTypes.func.isRequired
};
export default BoardsList;
