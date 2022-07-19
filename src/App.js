import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardsView from "./components/BoardsView";
import CardsView from "./components/CardsView";

function App() {
  const defaultBoards = [];
  const defaultCards = [];

  const url = "https://powerful-lake-89201.herokuapp.com";
  // useState for Board
  const [boards, setBoards] = useState(defaultBoards);
  // useState for Card
  const [cards, setCards] = useState(defaultCards);
  // useState to keep track of what board we're currently looking at (user's choice)
  const [chosenBoard, setChosenBoard] = useState(null);

  // useEffect upon dom load
  useEffect(() => {
    // axios call, after promise is completed or rejected:
    axios
      .get(`${url}/boards`)
      .then((response) => {
        // iterate through each board and append to boards
        const updatedBoards = [...boards];
        const dataList = response.data;
        for (const data of dataList) {
          updatedBoards.push(data);
        }
        setBoards(updatedBoards);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // BoardView -> BoardList, NewBoardButton, NewBoardForm (visible/invisible depending on NewBoardButton toggle): siblings easier ^^ -> all state at BoardView level to control NewBoardForm visibility

  //get all cards from user chosen board -> pass down to boardlist
  const getCardsFromOneBoard = (boardId) => {
    axios
      .get(`${url}/boards/${boardId}/cards`)
      .then((response) => {
        // iterate through each card and append to cards
        const updatedCards = response.data.map((card) => {
          return [...cards, card];
        });
        setCards(updatedCards);
        setChosenBoard(boardId);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // delete board (need to add endpoints)
  const deleteBoard = (boardId) => {
    axios
      .delete(`${url}/boards/${boardId}`)
      .then(() => {
        const updatedBoards = boards.filter(
          (board) => board.board_id !== boardId
        );
        setBoards(updatedBoards);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // delete card
  const deleteCard = (cardId) => {
    axios
      .delete(`${url}/cards/${cardId}`)
      .then(() => {
        const updatedCards = cards.filter((card) => card.card_id !== cardId);
        setCards(updatedCards);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // onformsubmitboard
  const onFormSubmitBoard = (requestBody) => {
    axios
      .post(`${url}/boards`, requestBody)
      .then((response) => {
        const newBoard = {
          board_id: response.id,
          title: requestBody.title,
          owner: requestBody.owner,
        };
        setBoards([...boards, newBoard]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // on formsubmitcard
  const onFormSubmitCard = (boardId, requestBody) => {
    axios
      .post(`${url}/boards/${boardId}/card`, requestBody)
      .then((response) => {
        const newCard = {
          card_id: response.card_id,
          message: requestBody.message,
          like_count: requestBody.like_count,
        };
        setCards([...cards, newCard]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateLikeCts = (cardId) => {
    const cardObj = cards.filter((card) => card.card_id === cardId);
    axios
      .put(`https://powerful-lake-89201.herokuapp.com/cards/${cardId}`, {
        like_count: cardObj.like_count + 1,
      })
      .then(() => {
        const updatedCards = cards.map((card) => {
          if (card.card_id === cardId) {
            card.like_count++;
          }
          return card;
        });
        setCards(updatedCards);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // default landing page
  if (chosenBoard === null) {
    return (
      <BoardsView
        boardData={boards}
        selectBoardCallback={getCardsFromOneBoard}
        deleteBoardCallback={deleteBoard}
        makeBoardCallback={onFormSubmitBoard}
      ></BoardsView>
    );
  }
  // render cardsview when user choose certain board
  // need to add logic to set chosenBoard state back to null when user clicked 'x' button in cardsview
  else {
    return (
      <CardsView
        cards={cards}
        updateLikes={updateLikeCts}
        deleteCard={deleteCard}
        submitCard={onFormSubmitCard}
      ></CardsView>
    );
  }
}

export default App;
