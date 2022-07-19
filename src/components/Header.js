import React from "react";
export const Header = ({ title }) => {
  return (
    <div
      style={{ padding: 10, width: 200, boxShadow: `10px 10px 5px lightblue` }}
    >
      {title}
    </div>
  );
};
