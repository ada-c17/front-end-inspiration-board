// import axios from "axios";
import React, { useState } from "react";
import "./NewCardButton.css";
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";
import plus from '../assets/plus.svg';

const NewCardButton = ({submitCard, chosenBoard}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input id="addCard" onClick={togglePopup} type="image" src={plus} alt="add a new board"/>
      {isOpen && (
        <NewCardForm
          submitCard={submitCard}
          handleClose={togglePopup}
          chosenBoard={chosenBoard}
        />
      )}     
    </div>
  );
};

export default NewCardButton;
