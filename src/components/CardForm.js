import { useState } from "react";

const defaultCard = {
  message:"",
  board_id: 4
};

const CardForm = (props) => {
  console.log("We are in Card Form")
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CardForm;
