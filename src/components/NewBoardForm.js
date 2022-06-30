import { Link, useLocation } from "react-router-dom";

const NewBoardForm = () => {
  return (
    <>
      <Link to="/" className="HomeLink">
        Return Home
      </Link>
      <h1>Add New Board</h1>
    </>
  );
};
export default NewBoardForm;
