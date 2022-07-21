import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback({
      messageData: formFields.message,
      boardId: props.boardId,
    });

    setFormFields({
      message: "",
    });
  };

  return (
    <section className={`${props.updating ? "active-form" : "hidden-form"}`}>
      <section className="single-card-container">
        <section className="single-card">
          <form onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="cardMessage">Card Message:</label>
              <br />
              <input
                name="cardMessage"
                value={formFields.title}
                onChange={onMessageChange}
              />
            </div>

            <input type="submit" value="Add Card" />
          </form>
        </section>
      </section>
    </section>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default NewCardForm;
