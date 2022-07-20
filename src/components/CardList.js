import Card from './Card';
import './CardList.css';

const CardList = (props) => {
  const cardElements = props.cardData.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        addOneLike={props.addOneLike}
        deleteCard={props.deleteCard}
      ></Card>
    );
  });

  //beauty
  return (
    <>
      <div>
        <section className="card-list">{cardElements}</section>
      </div>
    </>
  );
};

export default CardList;
