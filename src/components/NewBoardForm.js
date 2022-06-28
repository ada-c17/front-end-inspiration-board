import React, { useState } from "react";

const kDefaultFormState = {
  title: "",
  creator: "",
};

const NewBoardForm = () => {
  const [formFields, setFormFields] = useState(kDefaultFormState);

  const onTitleChange = (event) => {
    console.log(event);
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onCreatorChange = (event) => {
    setFormFields({
      ...formFields,
      creator: event.target.value,
    });
  };
  // this was setting state one at a time in seemingly separate objects
  // const handleChange = (event) => {
  //   const fieldName = event.target.name;
  //   const fieldValue = event.target.value;

  //   const newFormFields = { ...FormData, [fieldName]: fieldValue };
  //   setFormFields(newFormFields);
  // };

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
            onChange={onTitleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="creator"> Creator</label>
          <input
            type="text"
            name="creator"
            value={formFields.creator}
            onChange={onCreatorChange}
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
