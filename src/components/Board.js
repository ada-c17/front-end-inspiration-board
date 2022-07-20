// requirements:
// Create a new board by filling out a form
// Display an error message if invalid or incomplete information is provided
// Display all boards and ‘select’ a single board
// Hide form to create boards
// import PropTypes from "prop-types";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CardSortMenu from "./CardSortMenu";

// the Board component is a container component: it'll hold and manage Card data. it will pass this data into the presentational components (Card).

const Board = (props) => {
  if (props.boardId === null) {
    return (
      <div className="board">
        <p>Select a board on the left to see it's contents!</p>
      </div>
    );
  }

  const cardComponents = props.cards.map((card) => {
    // console.log(card.message);
    return (
      <li key={card.card_id}>
        <Card
          cardID={card.card_id}
          message={card.message}
          likes={card.likes}
          likeCardCallback={props.likeCardCallback}
          deleteCardCallback={props.deleteCardCallback}
        ></Card>
      </li>
    );
  });

  const deleteMe = () => {
    props.deleteCallback(props.boardId);
  };

  return (
    <div className="board">
      <header>
        <h2>{props.title}</h2>
        <p>owner: {props.owner}</p>
        <CardSortMenu cardSortCallback={props.cardSortCallback}></CardSortMenu>
      </header>
      <ul>
        {/* <li>title: {props.title}</li> */}
        {cardComponents}
      </ul>
      <button onClick={deleteMe}>Delete this board</button>
      <NewCardForm
        title={props.title}
        addCardCallback={props.addCardCallback}
      ></NewCardForm>
    </div>
  );
};

// Board.propTypes = {
//   cards: PropTypes.array.isRequired,
// };

export default Board;
