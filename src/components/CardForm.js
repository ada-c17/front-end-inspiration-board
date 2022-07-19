import React, { useState } from "react";

const CardForm = (props) => {
  const defaultCard = {
    message: "",
    board_id: props.boardID,
    messageError: "",
  };

  // const fetchCards = () => {
  //   props.fetchCards(defaultCard.board_id);
  // };

  const [formData, setFormData] = useState(defaultCard);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      props.addCard(formData);
      setFormData(defaultCard);
    }
  };

  const validate = () => {
    let messageError = "";

    if (!formData.message) {
      messageError = "Message can't be empty";
    }

    if (messageError) {
      setFormData({ messageError });
      return false;
    }

    return true;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="New-card-form">
        <label htmlFor="message"></label>
        <input
          type="text"
          name="message"
          placeholder="Enter a message"
          value={formData.message}
          onChange={onFormChange}
        />
        <div>{formData.messageError}</div>
        <input type="submit" value="Add Card" />
      </form>
    </div>
  );
};

export default CardForm;
