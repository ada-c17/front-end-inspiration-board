import PropTypes from "prop-types";
import SingleBoard from "./SingleBoard.js";
import NewBoardForm from "./NewBoardForm.js";
import PlusBox from "./PlusBox.js";
import "./Boards.css";

const Board = (props) => {
  const boardComponents = props.boards.map((board, index) => {
    return (
      <SingleBoard
        key={index}
        setIsOnHomepage={props.setIsOnHomepage}
        board={board}
        isOnHomepage={props.isOnHomepage}
        setActiveBoard={props.setActiveBoard}
        setCards={props.setCards}
        deleteBoardCallBack={props.deleteBoardCallBack}
      />
    );
  });

  return (
    <section className="boards-display">
      <NewBoardForm
        addBoardCallback={props.addBoardCallback}
        updating={props.updating}
      />
      <PlusBox setUpdating={props.setUpdating} elementType="board" />
      {boardComponents}
    </section>
  );
};

Board.propTypes = {
  setIsOnHomepage: PropTypes.func.isRequired,
  isOnHomepage: PropTypes.bool.isRequired,
  setActiveBoard: PropTypes.func.isRequired,
  setCards: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number,
      title: PropTypes.string,
      owner: PropTypes.string,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          card_id: PropTypes.number,
          message: PropTypes.string,
          likes_count: PropTypes.number,
          board_id: PropTypes.number,
        })
      ),
    })
  ).isRequired,
  deleteBoardCallBack: PropTypes.func.isRequired,
  addBoardCallback: PropTypes.func.isRequired,
  updating: PropTypes.bool.isRequired,
  setUpdating: PropTypes.func.isRequired,
};

export default Board;
