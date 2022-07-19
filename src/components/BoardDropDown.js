import React from "react";
import { Container } from "./Container";
import "./BoardDropDown.css";

export const BoardDropDown = ({ boards, setSelectedBoard, selectedBoard }) => {
  return (
    <Container title="Boards">
      <div style={{ padding: 10 }}>
        <ol>
          {boards?.map((each) => (
            <li
              onClick={() => {
                setSelectedBoard(each);
              }}
              className={each.id === selectedBoard?.id ? "board__selected" : ""}
            >
              {each.title}
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
};
