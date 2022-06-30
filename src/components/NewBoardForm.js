import { useState } from "react";

const defaultBoard = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(defaultBoard);

  const formUpdate = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;
    console.log(newFormData);
    setFormData(newFormData);
  };
  // need to create addBoard func with axios post call to App for proper functionality
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBoardCallBack(formData);
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
