import { useState } from "react";

const defaultBoard = {
  owner:"",
  title:""
};

const BoardForm = (props) => {
  console.log("We are in Board Form")
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

    props.addBoardCallback(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onFormChange}
      />
      <label htmlFor="owner">Created by</label>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={onFormChange}
      />
      <input type="submit" value="Submit new Board" />
    </form>
  );
};

export default BoardForm;
