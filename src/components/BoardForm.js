import React, { useState } from "react";
import "./BoardForm.css";

const defaultBoard = {
  title: "",
  owner: "",
  titleError: "",
  ownerError: "",
};

const BoardForm = (props) => {
  const [formData, setFormData] = useState(defaultBoard);

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
      props.addBoard(formData);
      setFormData(defaultBoard);
    }
  };

  const validate = () => {
    let titleError = "";
    let ownerError = "";

    if (!formData.title) {
      titleError = "Title can't be blank";
    }

    if (!formData.owner) {
      ownerError = "Owner can't be blank";
    }

    if (titleError || ownerError) {
      setFormData({ titleError, ownerError });
      return false;
    }

    return true;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="New-board-form">
        <label htmlFor="title"></label>
        <input
          type="text"
          name="title"
          placeholder="Board Title"
          value={formData.title}
          onChange={onFormChange}
        />
        <div>{formData.titleError}</div>
        <label htmlFor="owner"></label>
        <input
          type="text"
          name="owner"
          placeholder="Owner's Name"
          value={formData.owner}
          onChange={onFormChange}
        />
        <div>{formData.ownerError}</div>
        <input type="submit" value="Create Board" />
      </form>
    </div>
  );
};

export default BoardForm;
