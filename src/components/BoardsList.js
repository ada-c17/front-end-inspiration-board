import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

const BoardsList = (props) => {
  const boardComponents = props.boardsList.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        showBoardCallBack={props.showBoardCallBack}
        selectedBoardCallBack={props.selectedBoardCallBack}
      />
    );
  });
  return <div>{boardComponents}</div>;
};

// BoardsList.propsTypes = {
//   boards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       owner: PropTypes.string.isRequired,
//     })
//   ),
// };

export default BoardsList;
