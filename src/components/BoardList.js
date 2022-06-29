import React from "react";
import PropTypes from "prop-types";

const BoardList = (props) => {
  // map function to return bullet list item with title of each board
  const boardTitles = props.boards.map((board) => {
    return <li>{board.title}</li>;
  });

  return (
    <section>
      <ul>{boardTitles}</ul>
    </section>
  );
};

// receives array of board objects which contain board title and creator
// (these board objects should reflect boards in database)
BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
