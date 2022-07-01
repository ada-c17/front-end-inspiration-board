import Card from "./Card";

const CardsList = (props) => {
  const cardComponents = props.cardsList.map((card) => {
    return (
      <Card
        key={card.card_id}
        id={card.card_id}
        board_id={card.board_id}
        message={card.message}
        likes_count={card.likes_count}
        showBoardCallBack={props.showBoardCallBack}
        selectedBoardCallBack={props.selectedBoardCallBack}
      />
    );
  });
  return <div>{cardComponents}</div>;
};

export default CardsList;
