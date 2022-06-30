import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NewCardForm = ({onAddCard}) => {

  const [cardData, setCardData] = useState({
    message: '',
  });

  const [isVisible, setIsVisible] = useState(false)

  const submitCardData = (e) => {
    e.preventDefault();

    onAddCard({...cardData});
    setCardData({message:''});
  };

  const handleChange = (e) => {
    setCardData({...cardData, [e.target.name]: e.target.value});
  };

  const handleVisibility = (e) => {
    setIsVisible({isVisible: !isVisible});

  }

  return (
  <div class='btn-group'>
    <button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' onClick={handleVisibility}>
      New Card
    </button>
    <div class='dropdown-menu dropdown-menu-right'>
      <form class='dropdown-item' type='form' onSubmit={submitCardData}>
        <label htmlFor='message'>Message</label>
        <input name='message' id='message' value={cardData.message} onChange={handleChange}></input>
        <label htmlFor='bgrColor'>Background color</label>
        <select class='custom-select' name='bgrColor' id='bgrColor'>
          <option selected>Select Background Color</option>
          <option value='1'>Red</option>
          <option value='2'>Orange</option>
          <option value='3'>Blue</option>
        </select>
        <button type='button'>Create</button>
        <button type='button'>Cancel</button>
      </form>
    </div>
  </div>
  )

}

export default NewCardForm;