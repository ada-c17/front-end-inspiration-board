import { useState, useEffect } from "react";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import "./App.css";
import {
  postBoardAsync,
  postCardAsync,
  likeCardAsync,
  deleteCardAsync,
  selectBoardAsync,
  getAllBoardsAsync,
} from "./apiCalls";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const displayAllBoards = () => {
    getAllBoardsAsync()
      .then((boards) => {
        setBoardData(boards);
      })
      .catch((err) => {
        // console.log(err);
        // throw new Error("error displaying boards");
        setErrorMessage('error displaying all boards');
      });
  };

  useEffect(() => {
    displayAllBoards();
  }, [boardData]);

  const selectBoard = (id) => {
    selectBoardAsync(id)
      .then((board) => {
        setSelectedBoardId(board.boardId);
      })
      .catch((err) => {
        console.log(err.message);
        //throw new Error("error displaying board");
        setErrorMessage('error displaying board');
      });
  };

  const postBoard = (boardData) => {
    postBoardAsync(boardData)
      .then((newBoard) => {
        setBoardData((oldData) => [...oldData, newBoard]);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message)
      });
  };

  const postCard = (cardData) => {
    postCardAsync(cardData, selectedBoardId)
      .then(() => {
        setBoardData((oldBoardData) => {
          const newBoardData = oldBoardData.map((board) => {
            if (board.boardId === selectedBoardId) {
              return getSelectedBoard(selectedBoardId);
            } else {
              return board;
            }
          });
          return newBoardData;
        });
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message)
      });
  };

  const likeCard = (cardId) => {
    likeCardAsync(cardId, selectedBoardId)
      .then(() => {
        setBoardData((oldBoardData) => {
          const newBoardData = oldBoardData.map((board) => {
            if (board.boardId === selectedBoardId) {
              return getSelectedBoard(selectedBoardId);
            } else {
              return board;
            }
          });
          return newBoardData;
        });
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };

  const deleteCard = (cardId) => {
    deleteCardAsync(cardId, selectedBoardId)
      .then(() => {
        setBoardData((oldBoardData) => {
          const newBoardData = oldBoardData.map((board) => {
            if (board.boardId === selectedBoardId) {
              return getSelectedBoard(selectedBoardId);
            } else {
              return board;
            }
          });
          return newBoardData;
        });
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };

  // not sure if we want/need these to be in a helper function
  const handleNewBoard = (formFields) => {
    postBoard(formFields);
  };

  const handleNewCard = (formFields) => {
    if (formFields.message > 40) {
      postCard(formFields);
    } else {
      setErrorMessage('message is too long');
    }
  };

  const handleLike = (id) => {
    likeCard(id);
  };

  const handleDelete = (id) => {
    deleteCard(id);
  };

  const getSelectedBoard = (id) => {
    for (const board of boardData) {
      if (board.boardId === id) {
        return board;
      }
    }
  };

  const toggleAppData = () => {
    const appData = {
      title: "",
      cardList: "",
      newBoardForm: <NewBoardForm onBoardSubmit={handleNewBoard} />,
      newCardForm: "",
    };
    if (selectedBoardId) {
      appData.title = `${getSelectedBoard(selectedBoardId).title} by ${
        getSelectedBoard(selectedBoardId).creator
      }`;
      appData.cardList = (
        <CardList
          cardData={getSelectedBoard(selectedBoardId).cards}
          onDeleteCard={handleDelete}
          onAddLike={handleLike}
        />
      );
      appData.newBoardForm = "";
      appData.newCardForm = <NewCardForm onCardSubmit={handleNewCard} />;
    }
    return appData;
  };
  const appData = toggleAppData();

  return (
    <main className="grid-container">
      <header>
        <h1>in5piration board</h1>
      </header>
      <section id="call-to-action">
        <h2>
          Need a little ✨inspiration✨? Create a new board or select a board
          below!
        </h2>
      </section>

      <BoardList boardData={boardData} selectBoard={selectBoard} />

      <section id="display-cards">
        <h2>{appData.title}</h2>
        {appData.cardList}
      </section>
      <div className="board-and-card-forms">
        <p id="error-message">{errorMessage}</p>
        {appData.newCardForm}
        {appData.newBoardForm}
      </div>
    </main>
  );
}

export default App;
