import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

// Default values to set/reset state of the BoardForm
const newBoardForm = {
  title: '',
  owner: '',
};

const NewBoardForm = (props) => {
  const [boardForm, setBoardForm] = useState(newBoardForm);

  const handleChange = (e) => {
    const fieldLabel = e.target.name;
    const value = e.target.value;
    setBoardForm((oldData) => ({ ...oldData, [fieldLabel]: value }));
  };

  // calls below function when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setBoardForm(newBoardForm);
  };

  // state change for submission

  return (
    <form onSubmit={handleSubmit} className="new-board__form">
      <div className="new-board__fields">
        <label>Title: </label>
        <input name="title" value={boardForm.title} onChange={handleChange} />
        <label>Owner: </label>
        <input name="owner" value={boardForm.owner} onChange={handleChange} />
        <button className="new-board__submit" type="submit">
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default NewBoardForm;
