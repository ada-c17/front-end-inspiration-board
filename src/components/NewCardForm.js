import { useState } from "react";

const CardMessageInput = () => {
  const [cardField, setCardField] = useState({
    message: "",
  });

  const addMessage = (event) => {
    setCardField({
      ...cardField,
      message: event.target.value,
    });
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
      <button className="message-button">Add</button>
    </section>
  );
};

export default CardMessageInput;
