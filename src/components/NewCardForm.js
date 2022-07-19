import { useState } from "react";

const defaultCard = {
  message: "",
  board_id: null,
  likes_count: null,
};

const NewCardForm = (props) => {
  const [cardForm, setCardForm] = useState(defaultCard);
  const onMessageChange = (event) => {
    setCardForm({
      message: event.target.value,
      board_id: null,
      likes_count: null,
    });
  };

  const submitNewCard = (event) => {
    event.preventDefault();
    props.postNewCard(cardForm);
    console.log("hello");
    setCardForm(defaultCard);
  };

  return (
    <section className="new-card-container">
      <h2>Create a New Card</h2>
      <form onSubmit={submitNewCard} className="new-card-form">
        <label>Message</label>
        <input
          type="text"
          className={
            cardForm.message.length === 0 || cardForm.message.length > 40
              ? "invalid-form-input"
              : ""
          }
          onChange={onMessageChange}
          value={cardForm.message}
        ></input>
        <p>Preview: {cardForm.message}</p>
        <input
          type="Submit"
          disabled={
            cardForm.message.length === 0 || cardForm.message.length > 40
          }
          className="form-submit-btn"
          sortCards = {props.sortCards}
        ></input>
      </form>
    </section>
  );
};

export default NewCardForm;
