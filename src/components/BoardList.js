import React, { useState, useEffect } from "react";
import "./BoardList.css";
import NewBoardForm from "./NewBoardForm";
import Button from "./Button";
import PropTypes from "prop-types";
import axios from "axios";

const BoardList = ({ changeBoardCallback }) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
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

  return (
    <div>
      <ul>{buttonComponents}</ul>
      <NewBoardForm handleSubmission={makeNewBoard} />
    </div>
  );
};

BoardList.propTypes = {
  changeBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
