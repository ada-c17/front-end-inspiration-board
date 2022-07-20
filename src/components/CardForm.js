import React, { useState } from "react";
import PropTypes from "prop-types";
import "../style/CardForm.css";

const kDefaultFormState = {
  message: "",
  likesCount: 0,
};

const CardForm = ({ onAddCard, shouldHideCard }) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [errMsg, setErrMsg] = useState("");
  const errClass = errMsg.length === 0 ? "noError" : "errorMessages";

  const onInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.message.length === 0) {
      const newMsg = "You can't submit an empty wish!";
      setErrMsg(newMsg);
    }

    if (formData.message.length > 40) {
      const newMsg = "A wish has to be 40 characters or less";
      setErrMsg(newMsg);
    }

    if (formData.message.length === 0 && formData.message.length <= 40) {
      onAddCard(formData);
    }
    setFormData(kDefaultFormState);
  };

  return (
    <form className={shouldHideCard} onSubmit={handleSubmit}>
      <h4>Add A Wish for a Dreamer</h4>
      <input
        type="text"
        name="message"
        value={formData.message}
        onChange={onInput}
      ></input>
      <p className={errClass}>{errMsg}</p>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

CardForm.propTypes = {
  onAddCard: PropTypes.func,
};

export default CardForm;
