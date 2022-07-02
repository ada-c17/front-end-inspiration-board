import React from "react";
// import PropTypes from "prop-types";
import Card from "./Card";

const CardsList = (props) => {
  const cardComponents = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        cardData = {props.cards}
        message={card.message}
        likes_count={card.likes_count}
        deleteCardCallback={props.deleteCardCallback}
        likeCardCallback={props.likeCardCallback}
        board_id={props.board_id}
      />
    );
  });

  return (
    <div>
      <h2>Card for {props.selectedBoard.title}</h2>
      <div className="cards_list_no_bullets">{cardComponents}</div>
    </div>
  );
};

// CardsList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
export default CardsList;

//     const cardComponents = props.cardsList.map((card) => {
//       return (
//         <Card
//           key={card.card_id}
//           id={card.card_id}
//           board_id={card.board_id}
//           message={card.message}
//           likes_count={card.likes_count}
//           showBoardCallBack={props.showBoardCallBack}
//           selectedBoardCallBack={props.selectedBoardCallBack}
//         />
//       );
//     });
//     return <div>{cardComponents}</div>;
//   };
