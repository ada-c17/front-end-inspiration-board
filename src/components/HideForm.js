import React from "react";
const HideForm = (props) => {
  return (
    <div>
      <button onClick={() => props.flipFormCallBack()}>
        Show New Board Form
      </button>
    </div>
  );
};
export default HideForm;
