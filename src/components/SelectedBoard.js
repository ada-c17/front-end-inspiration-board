import React from "react";
import "./SelectedBoard.css";

const SelectedBoard = ({ chosenBoard }) => {
  return (
    <div className="chosen-board">
      <h2 className="chosen-board-name">{chosenBoard.title}</h2>
      <h3 className="chosen-board-member">
        <span className="circle-sketch-highlight">
          {chosenBoard.owner ? `By: ${chosenBoard.owner}` : ""}
        </span>
      </h3>
    </div>
  );
};

export default SelectedBoard;
