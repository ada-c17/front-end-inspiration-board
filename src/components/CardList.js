import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards, onLike, onDelete, board_id }) => {
    const cardComponents = cards.map((card) => {
        return (
        <Card
            key={card.id}
            id={card.id}
            message={card.message}
            likes={card.likes}
            onLike={onLike}
            onDelete={onDelete}
            board_id={board_id}
        />
        );
    });

    return <ul className="cards_list_no_bullets">{cardComponents}</ul>;
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        })
    ).isRequired,
    onLike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    };
export default CardList;

//-----------------------------------


// import Card from './card';

// const CardsList = (props) => {
//     const cardComponents = props.cardsList.map((card) => {
//         return (
//         <Card
//             key={card.id}
//             id={card.id}
//             board_id={card.board_id}
//             message={card.message}
//             showBoardCallBack={props.showBoardCallBack}
//             selectedBoardCallBack={props.selectedBoardCallBack}
//         />
//         );
//     });
//     return <div>{cardComponents}</div>;
// };
    
    

// export default CardsList;