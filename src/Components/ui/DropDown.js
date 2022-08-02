import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../App.css";
import Board from "./Board";

//pass to boards page to render dropdown of boards
const DropDown = ({
  value,
  options,
  onChange,
  getSelectedBoard,
  displayCards,
  boards,
  removeBoard,
  prompt,
}) => {
  //GET BOARD JSX
  const getBoardsJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          removeBoard={removeBoard}
        />
      );
    });
  };
  //navigate
  let navigate = useNavigate();
  //open state of board dropdown
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">{value ? value.name : prompt}</div>
        <div className={`arrow ${open ? "open" : null}`} />
        <div className={`options ${open ? "open" : null}`}>
          {boards.map((board) => (
            <div
              key={board.id}
              className={`${value === board ? "selected" : null}`}
              onClick={() => {
                //value, setValue state held in App.js
                //everything here passed down from App.js
                onChange(board);
                setOpen(false);
                getSelectedBoard(board.id);
                displayCards(board.id);
                navigate(`${board.id}`);
              }}
            >
              Title: {board.title} By: {board.owner}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="dropdown">
    //   <div className="control" onClick={() => setOpen((prev) => !prev)}>
    //     <div className="selected-value">{value ? value.name : prompt}</div>
    //     <div className={`arrow ${open ? "open" : null}`} />
    //     <div className={`options ${open ? "open" : null}`}>
    //       {options.map((option) => (
    //         <div
    //           key={option.id}
    //           className={`${value === option ? "selected" : null}`}
    //           onClick={() => {
    //             //value, setValue state held in App.js
    //             //everything here passed down from App.js
    //             onChange(option);
    //             setOpen(false);
    //             getSelectedBoard(option.id);
    //             displayCards(option.id);
    //             navigate(`${option.id}`);
    //           }}
    //         >
    //           Title: {option.title} By: {option.owner}
    //           <hr />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

DropDown.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default DropDown;
