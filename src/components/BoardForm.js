import { useState } from "react";

const defaultBoard = {
  owner:"",
  title:""
};

const BoardForm = (props) => {
  const [formData, setFormData] = useState(defaultBoard);
  const [disableBoard, setDisableBoard] = useState(true)
  
  const onFormChange = (event) => {

    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);

    if (
      newFormData.title === "" ||
      newFormData.owner === ""
    ) {
      setDisableBoard(true);
    } else {
      setDisableBoard(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addBoardCallback(formData);
  };
  if (props.shownBoard){
    return (
      <div id="boardFormContainer">
        <div id="boardForm">
          <h1>Make new board</h1>
          <form onSubmit={handleSubmit}>
            <div id="inputbox">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={onFormChange}
                />
            </div>
            <div id="inputbox">
              <label htmlFor="owner">Created by</label>
                <input
                  type="text"
                  name="owner"
                  value={formData.owner}
                  onChange={onFormChange}
                />
            </div>
            <div>
                <input
                  type="submit"
                  value="Submit"
                  disabled={disableBoard}
                />
            </div>
          </form>
          <button onClick={props.hideFormCallback}>Hide Board Form</button>
        </div>
      </div>
    );
  }
  else{
    return (
      <button onClick={props.hideFormCallback}>Show Board Form</button>
    )
  }
};

export default BoardForm;
