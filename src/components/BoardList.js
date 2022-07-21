import React, { useState, useEffect } from "react";
import "./BoardList.css";
import NewBoardForm from "./NewBoardForm";
import Button from "./Button";
import PropTypes from "prop-types";
import axios from "axios";
import partyFlag from "../images/birthday-flag-png-transparent-birthday-flag-images-120898.png";
import { backend_url } from "../env";

const BoardList = ({ changeBoardCallback }) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get(`${backend_url}/boards`)
      .then((response) => {
        setBoard(response.data);
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  const makeNewBoard = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  const buttonComponents = board.map((button) => (
    <Button
      key={button.id}
      id={button.id}
      title={button.title}
      owner={button.owner}
      changeBoardCallback={changeBoardCallback}
    />
  ));

  const [showForm, setShowForm] = useState(true);
  const buttonText = showForm ? "Hide New Board Form" : "Show New Board Form";
  const formDisplay = showForm ? "showBoard" : "hideBoard";
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="boardList">
      <img src={partyFlag} alt="party flag" id="partyFlag" />
      <ul>{buttonComponents}</ul>
      <div className={formDisplay}>
        <NewBoardForm handleSubmission={makeNewBoard} />
      </div>
      <button onClick={toggleForm}>{buttonText}</button>
    </div>
  );
};

BoardList.propTypes = {
  changeBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
