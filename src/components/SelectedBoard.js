import React from "react";
const SelectedBoard = (props) => {
  return (
    <div>
      {props.title} - {props.owner}
    </div>
  );
};
export default SelectedBoard;
