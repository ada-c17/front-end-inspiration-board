import React from "react";
import PropTypes from "prop-types";

const BackButton = (props) => {
  const goBack = () => props.setIsOnHomepage(true);
  return <button onClick={goBack}>⬅ Home</button>;
};

BackButton.propTypes = {
  setIsOnHomepage: PropTypes.func.isRequired,
};

export default BackButton;
