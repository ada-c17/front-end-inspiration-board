import React, { useState } from "react";
import PropTypes from "prop-types";
import "../style/BoardForm.css";

const kDefaultFormState = {
  title: "",
  owner: "",
};

const BoardForm = ({ onAddBoard }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const onInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  let titleValErr =
    formData.title.length > 0
      ? ""
      : "How can a dream be manifested without a name?";
  let ownerValErr = formData.owner.length > 0 ? "" : "A dream needs a dreamer!";

  const errTitleMsg = titleValErr.length === 0 ? "noError" : "errorMessages";
  const errOwnerMsg = ownerValErr.length === 0 ? "noError" : "errorMessages";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (titleValErr.length === 0 && ownerValErr.length === 0) {
      onAddBoard(formData);
    }
    // add error handling for empty title/owner
    // must be a visible display for user

    setFormData(kDefaultFormState);
  };

  // create a function to handle errors
  // error message is displayed until
  //  length of title >= 1 or length of owner >= 1
  // remove error message

  return (
    <form className="boardInput" onSubmit={handleSubmit}>
      <h4>Add A Dream</h4>
      <h5> ~dream name~ </h5>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onInput}
      ></input>
      <h5> ~name of dreamer~</h5>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={onInput}
      ></input>
      <p className={errTitleMsg}>{titleValErr}</p>
      <p className={errOwnerMsg}>{ownerValErr}</p>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

BoardForm.propTypes = {
  onAddBoard: PropTypes.func,
};

export default BoardForm;
