import Card from "./Card";

function CardList({
  cards,
  deleteCardCallback,
  likeCardCallback,
  cardListOrder,
}) {
  const sortCards = (cardListOrder) => {
    if (cardListOrder === "likes") {
      cards = cards.sort((a, b) => b[cardListOrder] - a[cardListOrder]);
    } else if (cardListOrder === "id") {
      cards = cards.sort((a, b) => a[cardListOrder] - b[cardListOrder]);
    } else if (cardListOrder === "message") {
      cards = cards.sort((a, b) => a.message.localeCompare(b.message));
    }
  };
  sortCards(cardListOrder);

  const getCardListJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          board_id={card.board_id}
          likes={card.likes}
          deleteCardCallback={deleteCardCallback}
          likeCardCallback={likeCardCallback}
        />
      );
    });
  };
  return <ul>{getCardListJSX(cards)}</ul>;
}

export default CardList;
