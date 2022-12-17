import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const options = [
  { value: "ID", label: "ID" },
  { value: "Alphabetically", label: "Alphabetically" },
  { value: "Likes", label: "Likes" },
];

const DropdownMenu = ({ handleCardDataCallback }) => {
  return (
    <Select
      onChange={(event) => handleCardDataCallback(event)}
      options={options}
    />
  );
};

DropdownMenu.propTypes = {
  handleCardDataCallback: PropTypes.func.isRequired,
  cardData: PropTypes.array.isRequired,
};

export default DropdownMenu;
