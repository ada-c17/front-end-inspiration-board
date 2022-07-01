import React, { useState } from "react";
import "./BoardForm.css";

const defaultBoard = {
  title: "",
  owner: "",
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
    props.addBoard(formData);
    setFormData(defaultBoard);
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
        <label htmlFor="owner"></label>
        <input
          type="text"
          name="owner"
          placeholder="Owner's Name"
          value={formData.owner}
          onChange={onFormChange}
        />
        <input type="submit" value="Create Board" />
      </form>
    </div>
  );
};

export default BoardForm;
