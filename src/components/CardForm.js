import { useState } from "react";

const CardForm = (props) => {
  const defaultCard = {
    message:"",
    // board_id: props.boardID
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

    props.cardsCallback({ message:formData.message, board_id: props.boardID });
  };

  return (
    <div class="cardFormContainer">
      <form onSubmit={handleSubmit}>
        <h1>Write your message</h1>
        <div id="cardForm">
          <div id="inputbox">
          <label htmlFor="message"></label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={onFormChange}
          />
          <span>Message</span>
          </div>
        </div>
          <div id="inputbox">
          <input 
            type="submit" 
            value="Submit new Card" 
            disabled={disableCard}
          />
          </div>
      </form>
    </div>
  );
};

export default CardForm;
