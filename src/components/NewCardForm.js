import { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [cardField, setCardField] = useState({
    message: "",
  });

  const messageButtonDisabled =
    cardField.message.length === 0 || cardField.message.length > 40;

  const addMessage = (event) => {
    setCardField({
      ...cardField,
      message: event.target.value,
    });
  };

  const addMessageWithEnter = (event) => {
    if (event.key === "Enter") {
      setCardField({
        ...cardField,
        message: event.target.value,
      });
      props.updateCards(cardField.message);
    }
  };

  const onUpdateCards = (event) => {
    event.preventDefault();
    props.updateCards(cardField.message);
    setCardField({
      message: "",
    });
  };

  return (
    <section className="add-message">
      <form onSubmit={onUpdateCards}>
        <input
          className="message-input"
          type="text"
          value={cardField.message}
          placeholder="Add a message here!"
          onChange={addMessage}
          onKeyPress={addMessageWithEnter}
        />
        <button
          disabled={messageButtonDisabled}
          className={
            messageButtonDisabled
              ? "message-button message-button-grey"
              : "message-button"
          }
          onClick={onUpdateCards}
        >
          Add
        </button>
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  updateCards: PropTypes.func,
};

export default NewCardForm;
