import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// import './NewCardForm.css';

const NewCardForm = (props) => {
  //brains
  const [message, setMessage] = useState('');
  // const [formValues, setFormValues] =useState({InitialFormValues});
  const [formErrors, setFormErrors] = useState({});

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitCard = (event) => {
    event.preventDefault();
    setFormErrors(validate(message));
    props.postCard(message);
    setMessage('');
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      console.log({ message });
      props.addNewCard(message);
      setMessage('');
      // setFormValues(initialFormValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.message) {
      errors.message = 'Message is required';
    } else if (values.message.length < 1) {
      errors.message = 'Message must be more than 1 character.';
    } else if (values.message.length > 40) {
      errors.message = 'Message cannot exceed 40 characters.';
    }
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
        </label>
        <button className="new-card__submit" type="submit">
          Submit Card
        </button>
        {/* <input type="submit" value="Submit" className=""></input> */}
        {/* <input
          type="Submit"
          disabled={message.length === 0 || message.length > 40}
          className="new-card-form__form-submit-btn"
        ></input> */}
      </form>
    </>
  );
};

export default NewCardForm;
