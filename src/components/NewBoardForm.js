import { useState } from "react";

const defaultBoard = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(defaultBoard);

  // function for update form when user input title and owner
  const formUpdate = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;
    setFormData(newFormData);
  };

  // function to add new board when user click on submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBoardCallBack(formData);
    setFormData(defaultBoard);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-board-form">
        <label htmlFor="title" className="label">
          Title:{" "}
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={formUpdate}
          className={
            formData.title.length === 0 || formData.title.length > 40
              ? "invalid-form-input"
              : ""
          }
        />
        <label htmlFor="owner" className="label">
          Owner's Name:{" "}
        </label>
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={formUpdate}
          className={
            formData.owner.length === 0 || formData.owner.length > 40
              ? "invalid-form-input"
              : ""
          }
        />
        <p>
          Preview:{" "}
          <span className="preview">
            {formData.title} - {formData.owner}
          </span>
        </p>
        <input
          type="Submit"
          className="submit"
          disabled={
            formData.title.length === 0 ||
            formData.owner.length === 0 ||
            formData.title.length > 40 ||
            formData.owner.length > 40
          }
        />
      </form>
    </div>
  );
};

export default NewBoardForm;
