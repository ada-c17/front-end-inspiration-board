import React, { useState } from "react";

const CardForm = (props) => {
  const defaultCard = {
    message: "",
    boardID: props.boardID,
    messageError: "",
  };
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
      props.addCard(formData.message, formData.boardID);
      setFormData(defaultCard);
    }
  };

  const validate = () => {
    let messageError = "";
    let boardIDError = "";

    if (!formData.message) {
      messageError = "Message can't be empty";
    }

    if (!formData.boardID) {
      boardIDError = "Board ID can't be blank";
    }

    if (messageError || boardIDError) {
      setFormData({ messageError, boardIDError });
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
        <label htmlFor="boardID"></label>
        <input
          type="text"
          name="boardID"
          placeholder="Enter a board ID"
          value={formData.boardID}
          onChange={onFormChange}
        />
        <input type="submit" value="Add Card" />
      </form>
    </div>
  );
};

export default CardForm;
