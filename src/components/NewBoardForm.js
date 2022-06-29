import React, { useState } from "react";

const kDefaultFormState = {
  title: "",
  creator: "",
};

const NewBoardForm = () => {
  const [formFields, setFormFields] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormFields = { ...formFields, [fieldName]: fieldValue };
    setFormFields(newFormFields);
  };

  return (
    <div className="NewBoardForm">
      <form>
        <h2>Create a New Board</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formFields.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="creator"> Creator</label>
          <input
            type="text"
            name="creator"
            value={formFields.creator}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input type="submit" value="Add board!"></input>
        </div>
      </form>
    </div>
  );
};

export default NewBoardForm;
