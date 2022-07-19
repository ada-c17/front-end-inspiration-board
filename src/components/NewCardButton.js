// import axios from "axios";
import React, { useState } from "react";
import "./NewCardButton.css";
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";

const NewCardButton = ({submitCard, chosenBoard}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>+</button>
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
