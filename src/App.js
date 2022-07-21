import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";

const kBaseUrl = "https://ssh-back-end-inspiration-board.herokuapp.com";

const boardApiToJson = (board) => {
  const { title, owner, board_id: boardId } = board;
  return { title, owner, boardId };
};

const getBoardData = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data.map(boardApiToJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

const cardApiToJson = (card) => {
  const { message, likes_count: likesCount, card_id: cardId } = card;
  return { message, likesCount, cardId };
};

const getCardData = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then((response) => {
      return response.data.map(cardApiToJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sortCardData = (unsortedCardData, sortType) => {
  const unsortedCardDataCopy = [...unsortedCardData];

  // if (sortType === "idUp") {
  // if sort status === "ascLikesCount" ? probably the names in the option
  // else if sort status === "descLikesCount"
  // else if sort status === "ascAlpha"
  // else if sortStatus === "descAlpha"
  // else if sortStatus === ""
  // }
  console.log(sortType);
  return unsortedCardDataCopy;
};

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const [btnText, setButtonText] = useState("Create New Dream");
  // const [sortStatus, setSortStatus] = useState("");

  let [boardNum, setBoardNum] = useState(0);
  let [boardTitle, setBoardTitle] = useState("");
  let newText = "";

  const showBoardForm =
    btnText === "Create New Dream" ? "hideBoard" : "showBoard";

  const showCardForm = boardNum !== 0 ? "showCard" : "hideCard";

  const loadBoards = () => {
    getBoardData().then((boards) => {
      setBoardData(boards);
    });
  };

  const updateCardData = (updatedCard) => {
    return axios
      .patch(
        `${kBaseUrl}/cards/${updatedCard.cardId}?likes_count=${updatedCard.likesCount}`
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCardData = (cardId) => {
    return axios
      .delete(`${kBaseUrl}/cards/${cardId}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadCards = (boardId) => {
    getCardData(boardId).then((cards) => {
      setCardData(cards);
    });
  };

  useEffect(() => {
    loadBoards();
  }, []);

  const increaseLikeCount = (updatedCard) => {
    updateCardData(updatedCard);
    const updatedLikes = cardData.map((card) => {
      if (card.cardId === updatedCard.cardId) {
        return updatedCard;
      } else {
        return card;
      }
    });

    setCardData(updatedLikes);
  };

  const handleBoard = (boardId, title) => {
    const newNum = boardId;
    const bTitle = title;

    setBoardNum(newNum);
    loadCards(boardId);
    setBoardTitle(bTitle);
  };

  const onCardDelete = (cardId) => {
    deleteCardData(cardId);
    const currentCards = cardData.filter((card) => {
      return card.cardId !== cardId;
    });
    setCardData(currentCards);
  };

  const addBoardData = (addedBoard) => {
    const requestBody = { ...addedBoard };

    return axios
      .post(`${kBaseUrl}/boards`, requestBody)
      .then(() => loadBoards())
      .catch((err) => console.log(err));
  };

  const addCardData = (addedCard) => {
    const message = addedCard.message;
    const likes_count = addedCard.likesCount;
    const requestBody = { message, likes_count };

    return axios
      .post(`${kBaseUrl}/boards/${boardNum}/cards`, requestBody)
      .then(() => loadCards(boardNum))
      .catch((err) => console.log(err));
  };

  const boardToggle = () => {
    if (btnText === "Create New Dream") {
      newText = "Hide Dream Form";
    } else {
      newText = "Create New Dream";
    }
    setButtonText(newText);
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

  const handleCardDataReady = (cardName) => {
    addCardData(cardName)
      .then((newCard) => {
        loadCards(boardNum);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSortSelection = (sortSelection) => {
    const sortType = sortSelection.target.value;
    const sortedCardData = sortCardData(cardData, sortType);
    setCardData(sortedCardData);
  };

  return (
    <div>
      <header>
        <h2>dream board</h2>
      </header>
      <main>
        <div className="boardContainer">
          <button onClick={boardToggle}>{btnText}</button>
          <BoardForm
            onAddBoard={handleBoardDataReady}
            shouldHideBoard={showBoardForm}
          ></BoardForm>
          <BoardList boards={boardData} onSelectBoard={handleBoard} />
        </div>
        <h4>{boardTitle}</h4>
        <p>sort:</p>
        <select className={showCardForm} onChange={handleSortSelection}>
          <option value="idUp">&#8657; Id &#8657;</option>
          {/* &#8657; is up arrow html code */}
          <option value="idDown">&#8595; Id &#8595;</option>
          {/* &#8595; is down arrow html code */}
          <option>&#8657; +1 &#8657;</option>
          <option>&#8595; +1 &#8595;</option>
          <option>&#8657; Wish message &#8657;</option>
          <option>&#8595; Wish message &#8595;</option>
        </select>
        <CardList
          cards={cardData}
          onUpdateLikes={increaseLikeCount}
          onDelete={onCardDelete}
          boardNum={boardNum}
        />
        <CardForm
          onAddCard={handleCardDataReady}
          shouldHideCard={showCardForm}
        ></CardForm>
      </main>
    </div>
  );
};

export default App;
