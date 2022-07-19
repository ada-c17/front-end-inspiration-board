import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";

const Card = (props) => {
  const cardComponents = props.cards.map((card, index) => {
    return (
      <div>
        <SingleCard
          message={card.message}
          likesCount={card.likes_count}
        ></SingleCard>
      </div>
    );
  });
  return <section>{cardComponents}</section>;
};

<<<<<<< HEAD
export default Card;
=======
const Card = (props) =>{
    if (props.board_id === {}){
        return null
    }
    const cardComponents = props.activeBoard.cards.map((card,index) => {
        return (
        <div>
            <SingleCard
            card_id={card.card_id}
            message={card.message}
            likesCount={card.likesCount}
            ></SingleCard>
        </div>)
    })
    return (<section>{cardComponents}</section>)

}

export default Card;
>>>>>>> 7f2be5ae8f888f45f651df61e02898e12664e76a
