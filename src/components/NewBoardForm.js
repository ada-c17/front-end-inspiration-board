import { Link } from "react-router-dom";

const NewBoardForm = () => {
  return (
    <>
      <Link to="/" className="HomeLink">
        Home is here
      </Link>
      <h1>Add New Board</h1>
    </>
  );
};
export default NewBoardForm;
