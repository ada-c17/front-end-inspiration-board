import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import addNewBoardForm from "./NewBoardForm"
import "./stylesheet/BoardList.css";
import { Link } from "react-router-dom";

const BoardList = ({ boardData, setCurrentBoardId, deleteBoard }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    return (
      <li>
        <Link
          to={`boards/${board.boardId}`}
          onClick={() => {
            navigate(`boards/${board.boardId}`);
          }}
        >
          {board.title}
        </Link>
        <button
          onClick={() => {
            deleteBoard(board.boardId);
          }}
        >
          Delete Board
        </button>
      </li>
    );
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (

    <section>
      <h1>Inspiration Board</h1>

      <ul>{boardData.map(createBoard)}</ul>
      <Button onClick={handleShow} type="button" class="btn btn-primary">Add New Board </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Add Board
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <addNewBoardForm /> */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Title *"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Owner *"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Submit
            </Button>
          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>

      </Modal>

    </section >
  );
};

export default BoardList;