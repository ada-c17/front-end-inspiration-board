import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from 'axios';

const AddNewBoardForm = (boardData,) => {

    //state in charge for opening and closing modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    //state in charge of updating form input data
    const url = "https://back-end-inspiration-board.herokuapp.com/boards";
    const [data, setData] = useState({
        title: "",
        owner: ""
    })

    //Form input stored in state 
    const handle = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }



    //data in state gets posted to api 
    const submit = (e) => {
        e.preventDefault();
        Axios.post(url, {
            title: data.title,
            owner: data.owner
        })
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }


    return (
        <section>
            <Button onClick={handleShow} type="button" class="btn btn-primary">Add New Board </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>
                        Add Board
                    </Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <Form onSubmit={(e) => submit(e)} >
                        <Form.Group className="mb-3">
                            <Form.Control
                                onChange={(e) => handle(e)}
                                id="title"
                                value={data.title}
                                type="text"
                                placeholder="Title *"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                onChange={(e) => handle(e)}
                                id="owner"
                                value={data.owner}
                                type="text"
                                placeholder="Owner *"
                                required
                            />
                        </Form.Group>


                    </Form>
                </Modal.Body>



                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                    <Button onClick={handleClose} variant="success" type="submit" block>
                        Submit
                    </Button>
                </Modal.Footer>

            </Modal>
        </section>

    )

}

export default AddNewBoardForm;


