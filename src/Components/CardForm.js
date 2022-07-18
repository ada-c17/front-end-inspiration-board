import { useState } from "react";
import PropTypes from "prop-types";
import "./CardForm.css";
import Boards from "./Boards";

const defaultCard = { message: "" };
const CardForm = (props) => {
  const [cards, setCards] = useState(defaultCard);
  // const board_id = props.boards.board_id;

  const handleFormInput = (event) => {
    const domNode = event.target;
    const message = domNode.name;
    const value = domNode.value;
    // console.log(message);
    // console.log(value);
    const newCards = { ...cards };
    newCards[message] = value;
    setCards(newCards);
  };

  const handleFormSubmission = (event) => {
    console.log("inside card form");
    event.preventDefault();
    props.handleFormSubmission(cards);
    setCards(defaultCard);
  };

  return (
    <div className="card-form-container">
      <h4>Post new card for selected board</h4>
      <form onSubmit={handleFormSubmission}>
        <table>
          <tr>
            <td>
              <label>Message</label>
            </td>
            <td>
              <input
                placeholder="type message..."
                type="text"
                name="message"
                value={cards.message}
                onChange={handleFormInput}
              ></input>
            </td>
          </tr>
          <tr>
            <input className="card-form-btn" type="submit" value="Submit" />
          </tr>
        </table>
      </form>
    </div>
  );
};

CardForm.propTypes = {
  handleFormSubmission: PropTypes.func.isRequired,
};

export default CardForm;
