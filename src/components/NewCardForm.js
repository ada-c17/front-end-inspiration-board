import React, {useState} from 'react';
import {DropdownButton, Form, Button, Row, Col} from 'react-bootstrap';
import './NewCardForm.css'
import PropTypes from 'prop-types';

const NewCardForm = ({onAddCard}) => {

  const [cardMessage, setCardMessage] = useState({
    message: '',
  });

  const [isVisible, setIsVisible] = useState(false);

  const addNewCard = (e) => {
    e.preventDefault();
    onAddCard(cardMessage);
    setCardMessage('');
  };

  const handleMessage = (e) => {setCardMessage(e.target.value)};

  // return (
  //   <section className='container'>
  //     <h2 class='new-card'>Add a new card</h2>
  //     <form onSubmit={addNewCard}>
  //       <label>Message</label>
  //       <input type='text'
  //             className={cardMessage.length === 0 || cardMessage.length > 5 ? "input_more_40" : ""}
  //             value={cardMessage.message}
  //             onChange={handleMessage}>
  //       </input>
  //       <input type='Submit' class='submit'></input>
  //     </form>
  //   </section>
  // )



  return (
    <>
    <DropdownButton align="end" title="New Card" id="dropdown-menu-align-end" variant="secondary">
        <Form onSubmit={addNewCard}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder="Enter message" className='input'/>
            <Form.Text onChange={handleMessage}
                    className={cardMessage.length === 0 || cardMessage.length > 5 ? "input_more_40" : "text-muted"}
                    value={cardMessage}
                    type="text">   
            {/* className="text-muted" */}
              Please enter a card message!
            </Form.Text>
          </Form.Group>

          <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={100}>
              Select Card Color
            </Form.Label>
            <Col sm={100}>
              <Form.Check
                type="radio"
                label="green"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                className="green"
              />
              <Form.Check
                type="radio"
                label="orange"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                className='orange'
              />
              <Form.Check
                type="radio"
                label="blue"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                className="blue"
              />
            </Col>
          </Form.Group>
          </fieldset>
          <Button variant="success" type="submit" id="submit">
            Add
          </Button>

    </Form>
    </DropdownButton>
  </>
  )

}

NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired,
};

export default NewCardForm;