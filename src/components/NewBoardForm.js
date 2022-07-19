import React from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";
import { useState } from "react";

const defaultForm = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(defaultForm);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    // make a new object based on form object
    const newForm = { ...formData };
    newForm[name] = value;
    console.log(newForm);
    setFormData(newForm);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault(); //this is important! Because otherwise the form's formData is deleted?
    props.makeBoardCallback(formData);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={handleFormSubmission}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormInput}
          ></input>
          <label>Owner</label>
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleFormInput}
          ></input>

          <input type="submit"></input>
        </form>
      </div>
    </div>
    // <form onSubmit={handleFormSubmission}>
    //   <label>Title</label>
    //   <input
    //     type="text"
    //     name="title"
    //     value={formData.title}
    //     onChange={handleFormInput}
    //   ></input>
    //   <label>Owner</label>
    //   <input
    //     type="text"
    //     name="owner"
    //     value={formData.owner}
    //     onChange={handleFormInput}
    //   ></input>

    //   <input type="submit"></input>
    // </form>
  );
};

NewBoardForm.propTypes = {
  makeBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;

// import "./CatForm.css";
// import { useState } from "react";
// import PropTypes from "prop-types";

// const defaultCat = {
//   name: "",
//   age: 0,
//   saying: "meow",
//   color: "",
// };

// const CatForm = (props) => {
//   const [catData, setCatData] = useState(defaultCat);

//   const handleFormInput = (event) => {
//     const inputElement = event.target;
//     const name = inputElement.name;
//     const value = inputElement.value;

// make a new object based on old catData object, then
//   const newCatData = { ...catData };
//   newCatData[name] = value;
//   console.log(newCatData);
//   setCatData(newCatData);
// };

// const handleFormSubmission = (event) => {
//   event.preventDefault(); //this is important! Because otherwise the form's catData is deleted?
//   props.handleSubmission(catData);
// };

//   return (
//     <form onSubmit={handleFormSubmission}>
//       <label>Name</label>
//       <input
//         type="text"
//         name="name"
//         value={catData.name}
//         onChange={handleFormInput}
//       ></input>
//       <label>Age</label>
//       <input
//         type="text"
//         name="age"
//         value={catData.age}
//         onChange={handleFormInput}
//       ></input>
//       <label>Saying</label>
//       <input
//         type="text"
//         name="saying"
//         value={catData.saying}
//         onChange={handleFormInput}
//       ></input>
//       <label>Color</label>
//       <input
//         type="text"
//         name="color"
//         value={catData.color}
//         onChange={handleFormInput}
//       ></input>

//       <input type="submit"></input>
//     </form>
//   );
// };

// CatForm.propTypes = {
//   handleSubmission: PropTypes.func.isRequired,
// };

// export default CatForm;
