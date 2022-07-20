import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./stylesheet/NewCardForm.css";

const AddNewCardForm = ({ submitCard, boardId }) => {
  //state in charge for opening and closing modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  const handleRestart = () => {
    setShow(false);
    data.message = "";
  };
  const [validated, setValidated] = useState(false);

  //state in charge of updating form input data
  const [data, setData] = useState({
    message: "",
  });
  const isValid = data.message.length > 0 && data.message.length <= 40;

  //Form input stored in state
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  //submits for and refreshes cards
  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      e.preventDefault();
      const newCard = {
        message: data.message,
      };
      submitCard(newCard, boardId);
    }
    data.message = "";
  };

  return (
    <section>
      <button onClick={handleShow} type="button" className="card-btn">
        Add New Card
      </button>

      <Modal centered show={show} onHide={handleClose} autoFocus={false}>
        <Modal.Header
          closeButton
          closeVariant="white"
          closeLabel="Close"
          className="header"
        >
          <Modal.Title>Add Card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={(e) => submit(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => handleInput(e)}
                id="message"
                value={data.message}
                type="text"
                placeholder="Message *"
                required
                autoFocus={true}
              />
            </Form.Group>
            <div className="modal-btns">
              <Button
                className="btn btn-primary text-nowrap success-btn"
                onClick={handleClose}
                disabled={!isValid}
                variant="success"
                type="submit"
                block
              >
                Submit
              </Button>
              <Button variant="secondary" onClick={handleRestart}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default AddNewCardForm;
