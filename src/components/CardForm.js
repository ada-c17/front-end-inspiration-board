import { useState } from "react";

const defaultCard = {
  message:"",
  board_id:""
};

const CardForm = (props) => {
  const [formData, setFormData] = useState(defaultCard);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    
    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;


    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.cardsCallback(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message</label>
      <input
        type="text"
        name="message"
        value={formData.message}
        onChange={onFormChange}
      />
      <label htmlFor="board_id">Board Id</label>
      <input
        type="text"
        name="board_id"
        value={formData.board_id}
        onChange={onFormChange}
      />
      <input type="submit" value="Submit new Card" />
    </form>
  );
};

export default CardForm;
