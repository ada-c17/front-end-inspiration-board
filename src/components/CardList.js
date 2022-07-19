import Card from "./Card";
import "./CardList.css";

const CardList = (props) => {
  const allCards = props.cardsData.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        board_id={card.board_id}
        message={card.message}
        likes={card.likes}
        deleteOneCardCallback={props.deleteOneCardCallback}
        likeOneCardCallback={props.likeOneCardCallback}
      />
    );
  });

  const option = props.sortOption;
  if (option === "key") {
    allCards.sort((a, b) => (a.card_id > b.card_id ? 1 : -1));
  } else if (option === "Alphabetically") {
    allCards.sort((a, b) => (a.props.message > b.props.message ? 1 : -1));
  } else if (option === "Likes") {
    allCards.sort((a, b) => (a.props.likes > b.props.likes ? 1 : -1));
  }
  console.log(allCards);

  return <section className="card-section">{allCards}</section>;
};

export default CardList;
