import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    // event.preventDefault();

    props.addBoardCallback({
      titleData: formFields.title,
      ownerData: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="boardTitle">Board Title:</label>
        <input
          name="boardTitle"
          value={formFields.title}
          onChange={onTitleChange}
        />
      </div>
      <div>
        <label htmlFor="boardOwner">Owner:</label>
        <input
          name="boardOwner"
          value={formFields.owner}
          onChange={onOwnerChange}
        />
      </div>
      <input type="submit" value="Add Board" />
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
