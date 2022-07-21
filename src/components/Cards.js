import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";
import "./Cards.css";
import NewCardForm from "./NewCardForm.js";
import PlusBox from "./PlusBox.js";

const Cards = (props) => {
  if (props.cards === []) {
    return null;
  }

  function compareObjectLetters(object1, object2, key) {
    const obj1 = object1[key].toUpperCase()
    const obj2 = object2[key].toUpperCase()
  
    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
  }

  function compareObjectNums(object1, object2, key) {
    const obj1 = object1[key]
    const obj2 = object2[key]
  
    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
  }

  // console.log((props.cards.sort((a, b) => {
  //   return compareObjectNums(a, b, 'likes_count')
  //   })))

  const idSort = () => {
    let sorted = props.cards.sort((a, b) => {
      return compareObjectNums(a, b, 'card_id')
    })
    let newArr = [...sorted]
    props.setCards(newArr)
  }

  const alphabetSort = () => {
    let sorted = (props.cards.sort((a, b) => {
      return compareObjectLetters(a, b, 'message')
    }))
    let newArr = [...sorted]
    props.setCards(newArr)
  }

  const likesSort = () => {
    let sorted = (props.cards.sort((a, b) => {
    return compareObjectNums(a, b, 'likes_count')
    }))
    let newArr = [...sorted]
    props.setCards(newArr)
  }

  const cardComponents = props.cards.map((card, index) => {
    return (
      <SingleCard
        key={index}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        deleteCardCallBack={props.deleteCardCallBack}
      ></SingleCard>
    );
  });
  
  return (
    <section className="cards-display">
      <NewCardForm
        addCardCallback={props.addCardCallback}
        boardId={props.boardId}
        updating={props.updating}
      />
      <PlusBox setUpdating={props.setUpdating} elementType="card" />
      {cardComponents}
      <p>
        <button onClick={idSort}>Sort By ID</button>
      </p>
      <p>
        <button onClick={alphabetSort}>Sort by Alphabetical</button>
      </p>
      <p>
        <button onClick={likesSort}>Sort by Number of Likes</button>
      </p>
    </section>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number,
      message: PropTypes.string,
      likes_count: PropTypes.number,
      board_id: PropTypes.number,
    })
  ),
  deleteCardCallBack: PropTypes.func.isRequired,
  addCardCallback: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
  updating: PropTypes.bool.isRequired,
  setUpdating: PropTypes.func.isRequired,
};

export default Cards;


// create three buttons or drop down menu to choose how to sort cards
// by id, by alaphbet(in message), by likes count

// need to create an empty array 
// and add sorted original array using spread operator (...)
// (do the sort on props.cards)
// use props.setCards to update state with the new array
