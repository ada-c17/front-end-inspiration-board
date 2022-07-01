import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ message }) => {
  console.log("inside the card");
  return <li className="single-card">{message}</li>;
};
Card.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Card;
