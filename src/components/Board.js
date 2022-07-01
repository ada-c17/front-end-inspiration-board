import "./Board.css";
import PropTypes from "prop-types";
import Card from "./Card";

const Board = (props) => {
  // console.log("we are in the board component", props.cards);
  const cardComponent = props.cards.map((card) => {
    return <Card
              key={card.id}
              id={card.id}
              message={card.message} 
              likes={card.likes_count} />;
  });

  const fetchTheCard = () => {
    console.log(props.id)
    props.cardCallback(props.id)
  }


  return (
    <div>
      <div>
        {/* <ol> */}
          <li onClick= {fetchTheCard}> Title: {props.title}</li>
        
          {/* <li>Owner :{props.owner}</li> */}
          {/* <li>{cardComponent}</li> */}
          {/* <li>Cards:{props.cards}</li> */}
          {/* </ol> */}

        
      </div>
      <div>
        {cardComponent}
      </div>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Board;
