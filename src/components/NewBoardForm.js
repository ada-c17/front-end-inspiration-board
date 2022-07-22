import { useState } from "react";
import PropTypes from "prop-types";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
    theme: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addBoardCallback({
      titleData: formFields.title,
      ownerData: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <section className={`${props.updating ? "active-form" : "hidden-form"}`}>
      <section className="single-box-container">
        <section className="single-box">
          <button className="close pointer" onClick={props.hideForm}>
            ✖
          </button>
          <form onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="boardTitle">Board Title:</label>
              <br />
              <input
                name="boardTitle"
                value={formFields.title}
                onChange={onTitleChange}
              />
            </div>
            <div>
              <label htmlFor="boardOwner">Owner:</label>
              <br />
              <input
                name="boardOwner"
                value={formFields.owner}
                onChange={onOwnerChange}
              />
            </div>
            <input type="submit" value="Add Board" />
          </form>
        </section>
      </section>
    </section>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
  updating: PropTypes.bool.isRequired,
};

export default NewBoardForm;
