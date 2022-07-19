import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import NewBoardForm from "./NewBoardForm";

const NewBoardButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={togglePopup}>+</button>
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
