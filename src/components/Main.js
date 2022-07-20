import SelectedCardList from "./SelectedCardList";
import NewCardForm from "./NewCardForm";
import SelectedBoard from "./SelectedBoard";

const Main = (props) => {
  return (
    <div className="app-main">
      <SelectedBoard chosenBoard={props.chosenBoard} />
      {props.chosenBoardId && (
        <NewCardForm
          chosenBoardId={props.chosenBoardId}
          handleSubmission={props.handleSubmission}
        />
      )}
      {props.cards && (
        <SelectedCardList
          boardTitle={props.boardTitle}
          cards={props.cards}
          deleteCard={props.deleteCard}
          addLike={props.addLike}
        />
      )}
    </div>
  );
};

export default Main;
