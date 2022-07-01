import React from "react";
import BoardForm from "./BoardForm";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button onClick={() => props.closeModal(false)}> X </button>
        </div>
        <div className="title">Create a new board</div>
        <div className="body">{/* <BoardForm /> */}</div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Modal;
