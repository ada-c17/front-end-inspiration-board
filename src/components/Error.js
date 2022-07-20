import React from "react";
import "./stylesheet/Error.css";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  return (
    <div className="error-pg">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="error-back-btn"
      >
        ← Back to Boards
      </button>
      <h1 className="error">Error! Page Not Found!</h1>
    </div>
  );
}

export default Error;
