import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
const BoardForm = ({ addBoardData }) => {
  let navigate = useNavigate();
  const [boardFormData, setBoardFormData] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (e) => {
    setBoardFormData({
      ...boardFormData,
      title: e.target.value,
    });
  };

  const onOwnerChange = (e) => {
    setBoardFormData({
      ...boardFormData,
      owner: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    addBoardData({
      title: boardFormData.title,
      owner: boardFormData.owner,
    });
    setBoardFormData({
      title: "",
      owner: "",
    });
    postBoard();
  };

  const postBoard = () => {
    return axios.post(
      "https://orange-purple-inspo-board.herokuapp.com/boards",
      {
        title: boardFormData.title,
        owner: boardFormData.owner,
      }
    );
  };

  return (
    <div>
      <section className="form">
        ⁺ 𓂋 𓈒 ♡Create Board ⁺ 𓂋 𓈒 ♡
        <form onSubmit={onFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={boardFormData.title}
            onChange={onTitleChange}
          />
          <hr />
          <label>Owner</label>
          <input
            type="text"
            value={boardFormData.owner}
            onChange={onOwnerChange}
          />
          <hr />
          <input
            type="submit"
            value="Add Board"
            className="form-button"
            onClick={() => {
              navigate("/cards");
            }}
          />
        </form>
      </section>
    </div>
  );
};

BoardForm.propTypes = {
  addBoardData: PropTypes.func.isRequired,
};
export default BoardForm;
