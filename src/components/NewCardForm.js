import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// import './NewCardForm.css';

const NewCardForm = (props) => {
  //brains
  const [message, setMessage] = useState('');
  // const [formValues, setFormValues] =useState({InitialFormValues});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleMessage = (event) => {
    // console.log(event.target.value);
    setMessage(event.target.value);
  };

  const handleSubmitCard = (event) => {
    event.preventDefault();
    setFormErrors(validate(message));
    // props.postNewCard(message);
    console.log(formErrors);
    // setMessage('');
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log({ message });
      props.postNewCard(message);
      setMessage('');
      // setFormValues(initialFormValues);
    }
  }, [formErrors]);

  const validate = (message) => {
    const errors = {};
    if (!message) {
      errors.message = 'Message is required';
    } else if (message.length > 40) {
      errors.message = 'Message cannot exceed 40 characters.';
    }
    console.log(message);
    console.log(errors);
    return errors;
  };

  //beauty
  return (
    <>
      <h1>Create Your Card</h1>
      <form onSubmit={handleSubmitCard} className="new-board__form">
        <label>
          Message:
          <input
            type="text"
            // value={formValues.message}
            value={message}
            className={
              message.length === 0 || message.length > 40
                ? 'invalid-form-input'
                : ''
            }
            onChange={handleMessage}
          ></input>
          <p>{formErrors.message}</p>
        </label>
        <button className="new-card__submit" type="submit">
          Submit Card
        </button>
      </form>
    </>
  );
};

export default NewCardForm;
