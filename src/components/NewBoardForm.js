import { React, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import "./stylesheet/NewBoardForm.css";

const AddNewBoardForm = ({ submitBoard }) => {
  //state in charge for opening and closing modal
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //state in charge of updating form input data
  const url = "https://back-end-inspiration-board.herokuapp.com/boards";
  const [data, setData] = useState({
    title: "",
    owner: "",
  });

  //Form input stored in state
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    if (data.title && data.owner) {
      console.log("working");
      const newData = {
        title: data.title,
        owner: data.owner,
      };
      submitBoard(newData);
    }
  };

  return (
    <section>
      <button onClick={handleShow} type="button" className=" board-btn">
        Add New Board
      </button>

      <Modal
        show={show}
        // onHide={handleClose}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title>Add Board</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={(e) => submit(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => handleInput(e)}
                required
                id="title"
                value={data.title}
                type="text"
                placeholder="Title *"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => handleInput(e)}
                required
                id="owner"
                value={data.owner}
                type="text"
                placeholder="Owner *"
              />
            </Form.Group>

            <Button
              className="btn btn-primary text-nowrap"
              // onClick={handleClose}
              variant="success"
              type="submit"
              block
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default AddNewBoardForm;
