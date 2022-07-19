import PropTypes from "prop-types";
import BoardName from "./BoardName.js";

const BoardsList = (props) => {
  const boardComponent = props.boards.map((board) => {
    return <BoardName 
              key={board.id}
              id={board.id}
              owner={board.owner}
              title={board.title}
              // cardsCallback={props.cardsCallback} 
              />;
  });
  return (
    <div>
      <h1>Boards</h1>
      <ol>
        {boardComponent}
      </ol>
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.array.isRequired,
};
export default BoardsList;
