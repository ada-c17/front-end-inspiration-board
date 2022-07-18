import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import BoardForm from "./components/BoardForm";
import cardData from "./data/cards.json";

const kBaseUrl = "https://ssh-back-end-inspiration-board.herokuapp.com/boards";

const boardApiToJson = (board) => {
    const { title, owner, board_id: boardId } = board;
    return { title, owner, boardId };
};

const getBoardData = () => {
    return axios
        .get(`${kBaseUrl}`)
        .then((response) => {
            return response.data.map(boardApiToJson);
        })
        .catch((err) => {
            console.log(err);
        });
};
const App = () => {
    const [newCards, setCardData] = useState(cardData);
    const [boardData, setBoardData] = useState([]);

    const loadBoards = () => {
        getBoardData().then((boards) => {
            setBoardData(boards);
        });
    };

    // const loadCards = () => {
    //   getCardData().then((cards) => {
    //     setCardData(cards);
    //   });
    // };

    useEffect(() => {
        loadBoards();
        // loadCards();
    }, []);

    const increaseLikeCount = (updatedCard) => {
        const updatedLikes = cardData.map((card) => {
            if (card.cardId === updatedCard.cardId) {
                return updatedCard;
            } else {
                return card;
            }
        });

        setCardData(updatedLikes);
    };

    const getBoardId = (boardId) => {
        const currentBoard = boardId;
        console.log(`Board Id: ${currentBoard}`);
    };

    const onCardDelete = (cardId) => {
        const currentCards = cardData.filter((card) => {
            return card.cardId !== cardId;
        });
        setCardData(currentCards);
    };

    const addBoardData = (addedBoard) => {
      const requestBody = { ...addedBoard };
  
      return axios
        .post(`${kBaseUrl}`, requestBody)
        .then(() => loadBoards())
        .catch((err) => console.log(err));
    };
  
    const handleBoardDataReady = (boardName) => {
      addBoardData(boardName)
        .then((newBoard) => {
          loadBoards((oldData) => [...oldData, newBoard]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
        <div id="App">
            <header>
                <h2>dream board</h2>
            </header>
            <main>
                <button id="ToggleBoardForm">Create New Dream</button>
                {/* maybe change the button text to Hide Dream Form */}
                <BoardForm onAddBoard={handleBoardDataReady}></BoardForm>
                <BoardList boards={boardData} onSelectBoard={getBoardId} />
                <CardList
                    cards={newCards}
                    onUpdateLikes={increaseLikeCount}
                    onDelete={onCardDelete}
                />
            </main>
        </div>
    );
};

export default App;
