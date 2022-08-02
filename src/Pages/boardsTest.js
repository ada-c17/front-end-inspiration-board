import React from "react";
import BoardForm from "../Components/form/BoardForm";
import DropDown from "../Components/ui/DropDown";

const BoardsTest = (props) => {
  return (
    <div className="App">
      <div>
        <h1>InspoBoard Boards Page</h1>
      </div>
      <BoardForm />
      <DropDown />
    </div>
  );
};

export default BoardsTest;
