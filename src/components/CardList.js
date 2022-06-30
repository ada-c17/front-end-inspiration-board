

import Card from './card';

const CardsList = (props) => {
    const cardComponents = props.cardsList.map((card) => {
        return (
        <Card
            key={card.id}
            id={card.id}
            board_id={card.board_id}
            message={card.message}
            showBoardCallBack={props.showBoardCallBack}
            selectedBoardCallBack={props.selectedBoardCallBack}
        />
        );
    });
    return <div>{cardComponents}</div>;
};
    
    

export default CardsList;