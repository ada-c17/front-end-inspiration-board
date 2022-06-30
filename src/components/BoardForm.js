import "./boardform.css";
import { useState } from "react";

function BoardForm(props) {
  const defaultBoard = {
    title: "",
    owner: "",
  };

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
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onFormChange}
      ></input>
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={onFormChange}
      ></input>
      <input type="submit" value="Add Board"></input>
    </form>
  );
}

BoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default BoardForm;
