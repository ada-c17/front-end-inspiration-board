import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton.js";

const Header = (props) => {
  if (props.isOnHomepage) {
    return (
      <header>
        <h1>{props.title}</h1>
      </header>
    );
  } else {
    return (
      <header>
        <h1>
          <BackButton setIsOnHomepage={props.setIsOnHomepage} /> {props.title}
        </h1>
      </header>
    );
  }
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isOnHomepage: PropTypes.bool.isRequired,
  setIsOnHomepage: PropTypes.func,
};

export default Header;
