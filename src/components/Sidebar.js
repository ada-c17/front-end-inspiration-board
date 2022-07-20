import BoardList from "./BoardList";
import BoardForm from "./BoardForm";
import { useState } from "react";
import "./Sidebar.css";

const SideBar = (props) => {
  const [newBoardFormTrigger, setNewBoardFormTrigger] = useState(false);

  return (
    <div className="app-sidebar">
      <h1 className="title">Inspiration Boards</h1>
      <button
        className="bubbly-button"
        onClick={() => setNewBoardFormTrigger(true)}
      >
        Add board
      </button>
      <BoardForm
        trigger={newBoardFormTrigger}
        newBoardSubmission={props.newBoardSubmission}
        setNewBoardFormTrigger={setNewBoardFormTrigger}
      />
      <br />
      <BoardList
        boards={props.boards}
        handleChosenBoardCallback={props.handleChosenBoardCallback}
        chosenBoardId={props.chosenBoardId}
        deleteBoard={props.deleteBoard}
      />
    </div>
  );
};

export default SideBar;
