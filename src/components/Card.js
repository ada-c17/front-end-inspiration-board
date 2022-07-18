import React from "react";
import PropTypes from 'prop-types';
import "./Card.css";

const Card = (props) => {
  return console.log("This is a Card");

//   const deleteCard = () => {
//     props.deleteCardCallback(props.id);
//   };

//   const likeCard = () => {
//     props.likeCardCallback(props.id);
//   };
//   return (
//     <section className = 'card_container'>
//       <button
//         className = 'delete_button'
//         onClick={deleteCard}
//       >
//         x
//       </button>
//       <p>{props.message}</p>
//       <button
//         className = 'like_button'
//         onClick = {likeCard}
//       >
//         {props.likes_count} {/* Tori to update */}
//       </button>
//     </section> 
//   );
// };
// Card.protoTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   likes_count: PropTypes.number.isRequired,
//   // deleteCardCallback: PropTypes.func.isRequired,
//   // likeCardCallback: PropTypes.func.isRequired
};

export default Card;
