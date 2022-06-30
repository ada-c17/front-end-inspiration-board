import Card from "./Card";

function CardList({cards}) {
  const getCardListJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          board_id={card.board_id}
        />
      );
    });
  };
  return <ul>{getCardListJSX(cards)}</ul>;
}

export default CardList;
