import "./boardform.css";
import { useState } from "react";

function BoardForm(props) {
  const defaultBoard = {
    title: "",
    owner: "",
  };

  const [formData, setFormData] = useState(defaultBoard);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;
    setFormData(newFormData);
    if (newFormData.owner === "" || newFormData.title === "") {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
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
        placeholder="Title"
        value={formData.title}
        onChange={onFormChange}
      ></input>
      <input
        type="text"
        name="owner"
        placeholder="Owner"
        value={formData.owner}
        onChange={onFormChange}
      ></input>
      <input
        type="submit"
        value="Add Board"
        disabled={disableSubmit}
        className="submit"
      ></input>
    </form>
  );
}

// BoardForm.propTypes = {
//   addBoardCallback: PropTypes.func.isRequired,
// };

export default BoardForm;
