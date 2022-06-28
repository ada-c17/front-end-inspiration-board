const NewBoardForm = () => {
  return (
    <div className="NewBoardForm">
      <form>
        <h2>Create a New Board</h2>
        <div>
          <label>Title</label>
          <input name="title" type="text"></input>
        </div>
        <div>
          <label>Creator</label>
          <input name="creator" type="text"></input>
        </div>
        <div>
          <input type="submit" value="Add Board!"></input>
        </div>
      </form>
    </div>
  );
};

export default NewBoardForm;
