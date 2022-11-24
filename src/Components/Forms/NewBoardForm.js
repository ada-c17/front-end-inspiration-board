import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdAddBox } from "react-icons/md";

const NewBoardForm = ({ onAddBoardCallback }) => {
  const [boardData, setBoardData] = useState({
    title: "",
    owner: "",
  });
  const [hide, setHide] = useState(true);

  const submitBoardData = (event) => {
    event.preventDefault();
    onAddBoardCallback(boardData);
    setBoardData({ title: "", owner: "" });
  };

  const handleBoardChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value });
  };

  const shown = hide ? "hidden" : "shown";

  return (
    <div>
      <MdAddBox className="icons" size={30} onClick={() => setHide(!hide)}>
        {hide ? "Show" : "Hide"}
      </MdAddBox>
      <div className={shown}>
        <form onSubmit={submitBoardData} className="new-board__form">
          <section>
            <h3>Add New Board</h3>
            <div className="new-board__fields">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  id="title"
                  value={boardData.title}
                  onChange={handleBoardChange}
                />
              </div>
              <div>
                <label htmlFor="owner">Owner</label>
                <input
                  name="owner"
                  id="owner"
                  value={boardData.owner}
                  onChange={handleBoardChange}
                />
              </div>
              <button className="button new-board__submit" type="submit">
                Add Board
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

NewBoardForm.propTypes = {
  onAddBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
