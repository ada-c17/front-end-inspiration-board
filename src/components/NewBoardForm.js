import { React, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import "./stylesheet/NewBoardForm.css";

const AddNewBoardForm = ({ submitBoard }) => {
    //state in charge for opening and closing modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)

    };
    const handleRestart = () => {
        setShow(false)
        data.title = ""
        data.owner = ""

    };
    const [validated, setValidated] = useState(false);



    //state in charge of updating form input data
    const url = "https://back-end-inspiration-board.herokuapp.com/boards";
    const [data, setData] = useState({
        title: "",
        owner: "",
    });
    const isValid = data.title.length > 0 && data.owner.length > 0;

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

        else {
            setValidated(true);
            e.preventDefault();
            const newData = {
                title: data.title,
                owner: data.owner,
            };
            submitBoard(newData);
        }
        data.title = ""
        data.owner = ""
    };
    //data in state gets posted to api
    // const submitBoard = () => {
    //   console.log("submit board ran");
    //   axios
    //     .post(url, {
    //       title: data.title,
    //       owner: data.owner,
    //     })
    //     .then((response) => {
    //       // console.log(response.data);
    //       console.log(getAllBoards);
    //       getAllBoards();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    //   useEffect(() => {
    //     getAllBoards();
    //   }, [data]);

    return (
        <section>
            <button onClick={handleShow} type="button" className=" board-btn">
                Add New Board{" "}
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="header">
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

                        <Button
                            className="btn btn-primary text-nowrap"
                            onClick={handleClose}
                            disabled={!isValid}
                            variant="success"
                            type="submit"
                            block
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleRestart}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default AddNewBoardForm;
