import React from "react";
import PropTypes from "prop-types";

//makeBoardCallback

const NewBoardButton = (props) => {
  return <button onClick={props.makeBoardCallback}> Make New Board </button>;
};

NewBoardButton.propTypes = {
  makeBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardButton;
