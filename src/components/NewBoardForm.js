import React, { useState } from "react";

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    owner: "",
  });

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addBoardData({ title: formData.title, owner: formData.owner });

    setFormData({ title: "", owner: "" });
  };

  const visibleButtonText = props.boardFormVisible ? "Hide ▼" : "Show ▲";
  const formStatus = props.boardFormVisible
    ? "NewBoardForm NewBoardForm--show"
    : "NewBoardForm NewBoardForm--hide";

  return (
    <section className={formStatus}>
      <header>
        <h2>Create a New Board</h2>
        <button onClick={props.toggleFormVisible}>{visibleButtonText}</button>
      </header>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onFormChange}
        ></input>
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={onFormChange}
        ></input>
        <input
          type="submit"
          value="Add Board"
          disabled={!formData.owner || !formData.title}
        ></input>
        <p>
          {" "}
          {formData.owner && formData.title
            ? ""
            : "Board must have a name and title"}
        </p>
      </form>
    </section>
  );
};

export default NewBoardForm;
