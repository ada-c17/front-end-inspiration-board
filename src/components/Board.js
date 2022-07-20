import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Board.css";
import axios from "axios";
import CardList from "./CardList";
import CardForm from "./CardForm";
import "./Board.css";

// code to create a new page for a board, UseParams in a function in react
//  that makes a new number per page
const Board = () => {
  let params = useParams();
  // sets board data as default values of 0 and empty
  const [boardData, setBoardData] = useState({
    cards: [],
    id: 0,
    owner: "",
    title: "",
  });
  //!!!for instructors: We recognize that we used one useState for nested object, but it could be placed in multiple useState due to the different object fields changing. However, due to time, we will keep the state like this.
  // getting api from backend for one board by ID
  const getBoardDatafromAPI = (id) => {
    axios
      .get(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${id}/cards`
      )
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("couldn't call api");
      });
  };
  // creates the page with a generated id through params
  useEffect(() => {
    getBoardDatafromAPI(params.id);
  }, [params.id]);
  // function to get our likes count per card
  // first we create a new object copy
  const setCardLikesCount = (id) => {
    const updatedBoardData = { ...boardData };
    let targetCard;
    for (let card of updatedBoardData.cards) {
      if (card.id === id) {
        targetCard = card;
      }
    }
    // per each card we add a like when it is clicked, the function is anonymous in card component
    axios
      .put(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}/like`)
      .then((response) => {
        targetCard.likes_count += 1;
        setBoardData(updatedBoardData);
      })
      .catch((error) => {
        console.log("couldn't add like");
      });
  };
  // delete card function per id, creating a new object again to render,
  // using a filter function that will only give us back the remaining cards
  const deleteCard = (id) => {
    const delUpdateBoard = { ...boardData };
    axios
      .delete(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}`)
      .then((response) => {
        delUpdateBoard.cards = delUpdateBoard.cards.filter(
          (card) => card.id !== id
        );
        setBoardData(delUpdateBoard);
      })
      .catch((error) => {
        getBoardDatafromAPI(id);
        console.log("Unable to delete");
      });
  };
  // function to add a message to a card that holds api call post
  const makeNewCard = (data) => {
    axios
      .post(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${params.id}/cards`,
        data
      )
      .then((response) => {
        getBoardDatafromAPI(params.id);
      })
      .catch((error) => {
        console.log("Could not make a new card!");
      });
  };
  // put api call that is used to allow card to be moved and pasted anywhere in the page
  const updatePos = (data, id) => {
    const updatedBoardData = { ...boardData };
    let targetCard;
    for (let card of updatedBoardData.cards) {
      if (card.id === id) {
        targetCard = card;
      }
    }
    axios
      .put(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}`, {
        PosX: data.x,
        PosY: data.y,
      })
      .then((response) => {
        console.log("Card position successfully updated!");
        targetCard.PosX = data.x;
        targetCard.PosY = data.y;
        setBoardData(updatedBoardData);
      })
      .catch((error) => {
        console.log("Could not update a position of the card!");
      });
  };
  // below, we use the route for this specific page in Link, then have the components to render the card list,
  // with all the cards information and state
  return (
    <div className="board">
      <Link to="/" className="HomeLink">
        <br />
        Return Home
      </Link>
      <div id="board_title">Space 💫 {boardData.title}</div>
      <div id="board-owner"> New Galaxy started by: {boardData.owner}</div>
      {/* card form is rendered here in order to add a new card */}
      <CardForm handleSubmission={makeNewCard} />
      <section>If it inspires you, then put it out into the universe!</section>
      <CardList
        data={boardData.cards}
        updatePos={updatePos}
        deleteCardCallBack={deleteCard}
        setLikesCountCallBack={setCardLikesCount}
      />
    </div>
  );
};

export default Board;
