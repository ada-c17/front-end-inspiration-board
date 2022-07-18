/* Board List Item displays the title of the board.
On click, it sets the state of CurrentBoard to this board's ID */
const BoardListItem = (props) => {
  const setBoardtoThis = () => props.setCurrentBoard(props.id);
  return (
    <button
      className={
        props.active ? "BoardListItem BoardListItem--active" : "BoardListItem"
      }
      onClick={setBoardtoThis}
    >
      {props.title}
    </button>
  );
};

export default BoardListItem;
