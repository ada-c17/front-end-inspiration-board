import { React } from "react";
import NewBoardForm from "../components/NewBoardForm";
import "./newboard.css";

export default function NewBoard({ addBoardCallback }) {
  return (
    <main style={{ padding: "1rem 0" }} className="form">
      <NewBoardForm addBoardCallback={addBoardCallback} />
    </main>
  );
}

// import React from "react";
// import { useState } from "react";
// import PropTypes from "prop-types";

// //change CSS

// const NewBoardForm = ({ addBoardCallback }) => {
//   const [newBoardData, setNewBoardData] = useState({
//     title: "",
//     owner: "",
//   });

//   const submitBoardData = (e) => {
//     e.preventDefault();
//     console.log(newBoardData);
//     addBoardCallback(newBoardData);
//     setNewBoardData({ title: "", owner: "" });
//   };

//   const handleChange = (e) => {
//     setNewBoardData({ ...newBoardData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form onSubmit={submitBoardData} className="new-board__form">
//       <section>
//         <h2>Add a Board</h2>
//         <div className="new-board__fields">
//           <label htmlFor="name">Title</label>
//           <input
//             name="title"
//             id="title"
//             value={newBoardData.title}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="name">Owner</label>
//           <input
//             name="owner"
//             id="owner"
//             value={newBoardData.owner}
//             onChange={handleChange}
//             required
//           />
//           <button className="button new-board__submit" type="submit">
//             Add Board
//           </button>
//         </div>
//       </section>
//     </form>
//   );
// };

// NewBoardForm.propTypes = {
//   addBoardCallback: PropTypes.func.isRequired,
// };

// export default NewBoardForm;
