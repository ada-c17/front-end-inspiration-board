import { useState } from 'react';
import React from 'react';

const NewCardForm = (props) => {
  //brains
  const [message, setMessage] = useState('');
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const submitCard = (event) => {
    // event.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    props.postCard(message);
    setMessage('');
  };

  //beauty
  return (
    <>
      <h1>Create Your Card</h1>
      <form onSubmit={submitCard}>
        <label>
          Message:
          <input
            type="text"
            className={
              message.length === 0 || message.length > 40
                ? 'invalid-form-input'
                : ''
            }
            onChange={handleMessage}
            value={message}
          ></input>
        </label>
        <button onClick={submitCard}>Submit</button>
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
