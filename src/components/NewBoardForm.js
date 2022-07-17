import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

// Default values to set/reset state of the BoardForm
const initialFormValues = {
  title: '',
  owner: '',
};

const NewBoardForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  // calls below function when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };

  // whenever formErrors changes, below code triggers
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log({ formValues });
      setFormValues(initialFormValues);
    }
  }, [formErrors]);

  // function to validate form when submitted
  const validateForm = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Title is required!';
    }
    if (!values.owner) {
      errors.owner = 'Owner is required!';
    }
    return errors;
  };

  return (
    <div>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit} className="new-board__form">
        <div className="new-board__fields">
          <label>Title: </label>
          <input
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          <p className="form-errors">{formErrors.title}</p>
          <label>Owner: </label>
          <input
            name="owner"
            value={formValues.owner}
            onChange={handleChange}
          />
          <p className="form-errors">{formErrors.owner}</p>
          <button className="new-board__submit" type="submit">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBoardForm;
