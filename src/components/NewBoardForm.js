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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={formUpdate}
        />
        <label htmlFor="owner">Owner's Name: </label>
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={formUpdate}
        />
        <h3>Preview: </h3>
        <p>{formData.title}</p>
        <p>- {formData.owner}</p>
        <input type="submit" value="Submit Board" />
      </form>
      <button onClick={() => props.flipFormCallBack()}>
        Hide New Board Form
      </button>
    </div>
  );
};

export default NewBoardForm;
