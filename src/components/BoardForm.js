import React, { useState } from "react";
import PropTypes from "prop-types";
import "../style/BoardForm.css";

const kDefaultFormState = {
  title: "",
  owner: "",
};

const BoardForm = ({ onAddBoard, shouldHideBoard }) => {
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
    setFormData(kDefaultFormState);
  };

  return (
    <form className={shouldHideBoard} onSubmit={handleSubmit}>
      <h4>Add A Dream</h4>
      <h5> ~dream name~ </h5>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onInput}
      ></input>
      <p className={errTitleMsg}>{titleValErr}</p>
      <h5> ~name of dreamer~</h5>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={onInput}
      ></input>
      <p className={errOwnerMsg}>{ownerValErr}</p>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

BoardForm.propTypes = {
  onAddBoard: PropTypes.func,
  shouldHideBoard: PropTypes.string,
};

export default BoardForm;
