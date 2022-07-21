import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
    <button className="btn" onClick={props.onClick}>{props.text}</button>
    );
  };

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  export default Button;
