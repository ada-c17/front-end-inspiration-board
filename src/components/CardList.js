// import './CardList.css';
// import Card from './Card';
// import PropTypes from 'prop-types';
// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// const CardList = (props) => {

//     const [cardsDisplayedOnBoard, setCardsDisplayedOnBoard] = useState([]);

//     useEffect(() => {
//         getCardsFromAPI();
//     }, []);

//     const getCardsFromAPI = () => {
//         axios
//             .get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
//             .then((response) => {
//                 setCardsDisplayedOnBoard(response.data);
//             })
//             .catch((error) => {
//                 console.log("ERROR");
//             });
//     };

//     const deleteCard = (id) => {
//         console.log('delete:', id);
    
//         axios
//             .delete(`process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
//             .then((response) => {
//                 const newCards = cardsDisplayedOnBoard.filter((card) => card.id !== id);
//                 setCardsDisplayedOnBoard(newCards);
//             })
//             .catch((error) => {
//                 console.log('Unable to delete card');
//             });
//     };

//     const likeCard = (id) => {
//         console.log('like:', id);

//         axios
//             .patch(`process.env.REACT_APP_BACKEND_URL}/cards/${id}/like`)
//             .then((response) => {
                
//             })
//             .catch((error) => {
//                 console.log('Unable to like card');
//             });
//     };

//     }

//     const cardComponents = cardsDisplayedOnBoard.map((card) => (
//         <Card
//             key={card.id}
//             id={card.id}
//             message={card.message}
//             likes_count={card.likes_count}
//             // deleteCardCallback={props.deleteCardCallback}
//             // likeCardCallback={props.likeCardCallback}
//         />
//     ));

//     return (
//         <div>
//             {cardComponents}
//         </div>
//     );
// };

// CardList.propTypes = {
//     cardsOnBoard: PropTypes.array.isRequired,
// };

// export default CardList;