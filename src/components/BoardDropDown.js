import React from "react";
import axios from "axios";
import { Container } from "./Container";
import "./BoardDropDown.css";

export const BoardDropDown = ({ id, boards, setSelectedBoard, selectedBoard, onRemoveCallback }) => {
    
  const onRemove = (id) => {
      axios
        .delete(`http://127.0.0.1:5000/boards/${id}`)
        .then((response) => {
          console.log(response);
          onRemoveCallback(id);
        })
        .catch(console.log);
    };


  return (
    <Container title="Boards">
      <div style={{ padding: 10 }}>
        <ol className="board-list">
          {boards?.map((each) => (
            <div>
            <li
              onClick={() => {
                setSelectedBoard(each);
              }}
              className={each.id === selectedBoard?.id ? "board__selected" : ""}
            >
              {each.title}
            </li>
            <button onClick={()=>onRemove(each.id)} type="button" className="delete-board-btn">
            Delete
            </button>
            </div>
          ))}
        </ol>
      </div>
    </Container>
  );
};