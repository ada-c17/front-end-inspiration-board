import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

// Default values to set/reset state of the CardForm
const initialMessageValues = {
  message: '',
};

const NewCardForm = (props) => {
  //brains
  const [messageValues, setMessage] = useState(initialMessageValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleMessage = (event) => {
    // console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    setMessage({ ...messageValues, [name]: value });
  };

  const handleSubmitCard = (event) => {
    event.preventDefault();
    setFormErrors(validate(messageValues));
    // props.postNewCard(message);
    console.log(formErrors);
    // setMessage('');
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.postNewCard(messageValues);
      setMessage(initialMessageValues);
    }
  }, [formErrors]);

  const validate = (messageValues) => {
    const errors = {};
    if (!messageValues.message) {
      errors.message = 'Message is required';
    } else if (messageValues.message.length > 40) {
      errors.message = 'Message cannot exceed 40 characters.';
    }
    return errors;
  };

  //beauty
  return (
    <>
      <h1>Create Your Card</h1>
      <form onSubmit={handleSubmitCard} className="new-card__form">
        <div className="new-card__fields">
          <label>Message: </label>
          <textarea
            name="message"
            value={messageValues.message}
            className="new-card__input"
            onChange={handleMessage}
          />
          <p className="form-errors"> {formErrors.message}</p>
          <button className="new-card__submit" type="submit">
            Submit Card
          </button>
        </div>
      </form>
    </>
  );
};

export default NewCardForm;
