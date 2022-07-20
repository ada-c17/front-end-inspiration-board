import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./stylesheet/NewBoardForm.css";

const AddNewBoardForm = ({ submitBoard }) => {
  //state in charge for opening and closing modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  const handleRestart = () => {
    setShow(false);
    data.title = "";
    data.owner = "";
  };
  const [validated, setValidated] = useState(false);

  //state in charge of updating form input data
  const [data, setData] = useState({
    title: "",
    owner: "",
  });
  const isValid =
    data.title.length > 0 && data.owner.length > 0 && data.title.length < 40;

  //Form input stored in state
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  //submits for and refreshes boards
  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      e.preventDefault();
      const newData = {
        title: data.title,
        owner: data.owner,
      };
      submitBoard(newData);
    }
    data.title = "";
    data.owner = "";
  };

  return (
    <section>
      <button onClick={handleShow} type="button" className=" board-btn">
        Add New Board{" "}
      </button>

      <Modal centered show={show} onHide={handleClose} autoFocus={false}>
        <Modal.Header
          closeButton
          closeVariant="white"
          closeLabel="Close"
          className="header"
        >
          <Modal.Title>Add Board</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={(e) => submit(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => handleInput(e)}
                id="title"
                value={data.title}
                type="text"
                placeholder="Title *"
                required
                autoFocus={true}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => handleInput(e)}
                id="owner"
                value={data.owner}
                type="text"
                placeholder="Owner *"
                required
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

export default AddNewBoardForm;
