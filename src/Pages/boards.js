import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../App.css";
import "../Styles/animate.css";
import Pointer from "../Images/pointing.png";
import Modal from "../Components/ui/Modal";
import Pistachios from "../Images/pistachio.png";
import Lamp from "../Images/table-lamp.png";
import Airpods from "../Images/airpods.png";
import Pen from "../Images/pen.png";
const BoardsPage = ({
  options,
  prompt,
  value,
  onChange,
  getSelectedBoard,
  addBoardData,
  displayCards,
  removeBoard,
  getBoards,
}) => {
  //after you click on board, open modal to show options

  const [optionsPrompt, setOptionsPrompt] = useState(false);
  const [boardId, setBoardId] = useState([]);

  const openModal = (id) => {
    setBoardId(id);
    setOptionsPrompt(true);
    // navigate(`${options.id}/options`);
  };
  // let navigate = useNavigate();
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
    return axios
      .post("https://orange-purple-inspo-board.herokuapp.com/boards", {
        title: boardFormData.title,
        owner: boardFormData.owner,
      })
      .then(() => {
        getBoards();
      });
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <img src={Airpods} alt="" width={80} height={80} />
      <div className="board-class">
        <h1 className="board-label">
          InspoBoard Boards Page
          <img
            src={Pointer}
            alt=""
            width={50}
            height={50}
            className="board-label"
          />
        </h1>
      </div>

      <div className="dropdown">
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">
            {value && value.owner !== "" ? value.title : prompt}
          </div>
          <div className={`arrow ${open ? "open" : null}`} />
          <div className={`options ${open ? "open" : null}`}>
            {options.map((option) => (
              <div
                key={option.id}
                className={`${value === option ? "selected" : null}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                  getSelectedBoard(option.id);
                  displayCards(option.id);
                  openModal(option.id);
                }}
              >
                Title: {option.title} By: {option.owner}
              </div>
            ))}
          </div>
          <img src={Lamp} alt="" width={80} height={80} className="lamp" />
        </div>
      </div>
      <Modal
        setOptionsPrompt={setOptionsPrompt}
        optionsPrompt={optionsPrompt}
        boardId={boardId}
        removeBoard={removeBoard}
      />
      <div className="form-animate">
        <section className="form">
          ⁺ 𓂋 𓈒 ♡Create Board ⁺ 𓂋 𓈒 ♡
          <form onSubmit={onFormSubmit} className="form-contents">
            <label className="label">Title</label>
            <input
              type="text"
              value={boardFormData.title}
              onChange={onTitleChange}
              className="input"
              placeholder="Name your board.."
            />
            <label className="label">Owner</label>
            <input
              type="text"
              value={boardFormData.owner}
              onChange={onOwnerChange}
              className="input"
              placeholder="Who created this board?.."
            />
            <input type="submit" value="Add Board" className="form-button" />
          </form>
        </section>
      </div>
      <div>
        <img src={Pistachios} alt="" width={80} height={80} />
        <img src={Pen} alt="" width={80} height={80} />
      </div>
    </div>
  );
};

BoardsPage.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default BoardsPage;
