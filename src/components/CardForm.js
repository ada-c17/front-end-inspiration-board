import { useState } from "react";

const CardForm = (props) => {
  const defaultCard = {
    message:"",
    board_id: props.boardID
  };

  const [formData, setFormData] = useState(defaultCard);
  const [disableCard, setDisableCard] = useState(true)

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    
    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;


    setFormData(newFormData);
    
    if (
      newFormData.message === "" ||
      newFormData.message.length > 40 
    ) {
      setDisableCard(true);
    } else {
      setDisableCard(false);
    }
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
      {/* <label htmlFor="board_id">Board Id</label>
      <input
        type="text"
        name="board_id"
        value={formData.board_id}
        onChange={onFormChange}
      /> */}
      <input 
        type="submit" 
        value="Submit new Card" 
        disabled={disableCard}
      />
    </form>
  );
};

export default CardForm;
