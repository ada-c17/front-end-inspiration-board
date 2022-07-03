import PropTypes from "prop-types";
import Card from "./Card";

const BoardWithCards = (props) => {
    const cardComponent = props.cards.map((card) => {
        return <Card
                key={card.card_id}
                id={card.card_id}
                message={card.message}
                board_id={card.board_id}
                likes={card.likes_count} 
                deleteCard={props.deleteCard}
                changeLikes={props.changeLikes}
                // boardTitle={props.boardTitle}
                />;
    });
    
    return (
        <div>
            
            <div>{cardComponent}</div>
        </div>
        );
    };
    
    BoardWithCards.propTypes = {
        cards: PropTypes.array.isRequired,
    };
    
    export default BoardWithCards;
    