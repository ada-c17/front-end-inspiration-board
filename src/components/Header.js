import React from "react";
import "./Header.css";

export const Header = ({ title }) => {
  return (
    <div className="card-header">
      {title}
    </div>
  );
};