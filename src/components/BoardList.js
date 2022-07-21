import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards, onSelectBoard, selectedBoardId }) => {
  const boardComponents = boards.map((board) => {
    return (
      //<ul key={board.boardId}> {/* we don't really need this ul line here*/}
        <Board
          boardId={board.boardId}
          title={board.title}
          owner={board.owner}
          cards={board.cards} //is cards a props for board? id so why we don't have it in board.js?
          color={board.color}
          onSelectBoard={onSelectBoard} //why in board.js we need to pass a para after onselectBoard but here not?
          selectedBoardId={selectedBoardId}
          boards={boards} //how can we put boards here when we map each board?
        />
      //</ul>
    );
  });

  return (
    <section className="boardsContainer">
      <h2 className="boardsTitle">Boards</h2>
      <ul>{boardComponents}</ul>
    </section>
  );
};

BoardList.propTypes = {//props形态必须要在最后补充定义
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectBoard: PropTypes.func.isRequired,
  selectedBoardId: PropTypes.number,
};

export default BoardList;
