import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import NewBoardForm from "./NewBoardForm";
import plus from '../assets/plus.svg';
import "./NewBoardButton.css";

const NewBoardButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <input id="addBoard" onClick={togglePopup} type="image" src={plus} alt="add a new board"/>
      {isOpen && (
        <NewBoardForm
          makeBoardCallback={props.makeBoardCallback}
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

NewBoardButton.propTypes = {
  makeBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardButton;
