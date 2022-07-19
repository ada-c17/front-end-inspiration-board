import { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [cardField, setCardField] = useState({
    message: "",
  });

  const addMessage = (event) => {
    setCardField({
      ...cardField,
      message: event.target.value,
    });
  };

  const onUpdateCards = (event) => {
    event.preventDefault();
    props.updateCards(cardField.message);
  };

  return (
    <section className="add-message">
      <input
        className="message-input"
        type="text"
        value={cardField.message}
        placeholder="Add a message here!"
        onChange={addMessage}
      />
      <button className="message-button" onClick={onUpdateCards}>
        Add
      </button>
    </section>
  );
};

NewCardForm.propTypes = {
  updateCards: PropTypes.func,
};

export default NewCardForm;
