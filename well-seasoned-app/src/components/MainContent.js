import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import NewCardForm from "./NewCardForm";
import "./MainContent.css";

const MainContent = ({
  chosenBoardData,
  increaseLikes,
  deleteCardApp,
  onHandleCardDataReady,
  deleteBoardApp,
}) => {
  return (
    <div id="all-MainContent">
      <NewCardForm
        id="new-card-form"
        onHandleCardDataReady={onHandleCardDataReady}
        chosenBoard={chosenBoardData}
      />
      <Board
        chosenBoardData={chosenBoardData}
        increaseLikes={increaseLikes}
        deleteCardApp={deleteCardApp}
      />
    </div>
  );
};

MainContent.propTypes = {
  chosenBoardData: PropTypes.shape({
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  increaseLikes: PropTypes.func.isRequired,
  deleteCardApp: PropTypes.func.isRequired,
  onHandleCardDataReady: PropTypes.func.isRequired,
  deleteBoardApp: PropTypes.func.isRequired,
};

export default MainContent;
