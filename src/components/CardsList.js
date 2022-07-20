import React, {useState} from "react";
//import PropTypes from "prop-types";
import Card from "./Card";


const CardsList = (props) => {
  console.log(props)
  const [cards, setCards] = useState(props.cardsData)

  const sortCards = (e) => {
    const feature = e.target.selectedIndex;
    console.log("this is the feature", feature)
    const cards_dict = {1: "id", 2: "likes_count", 3: "message"};
    const sortedCards = [...cards];
    console.log(cards)
    sortedCards.sort((a,b) => {return a[cards_dict[feature]] - b[cards_dict[feature]]})
    setCards(sortedCards)
  };
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        cardInfo={card}
        deleteCardCallback={props.deleteCardCallback}
        likeCardCallback={props.likeCardCallback}
        board_id={props.board_id}
      />
    );
  });
  
  return (
  <section className='cards__container'>
    <div>
      <h2>Card for {props.selectedBoard.title}</h2>
      <br/>
      <select id="sort-button" onChange = {sortCards}>
        <option value="" key="">select</option>
        <option value="Sort by ID" key = "sort by id" >ID</option>
        <option value="Sort Alphabetically" key = "sort by Alphabetically" >Alphabetically</option>
        <option value="Sort by Number of Likes" key = "sort by likes">Likes</option>
        </select>
      <div className="cards_list_no_bullets">{cardComponents}</div>

    </div>
  </section>
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

