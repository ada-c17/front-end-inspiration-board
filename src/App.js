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

  const displayAllBoards = () => {
    getAllBoardsAsync()
      .then((boards) => {
        setBoardData(boards);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("error displaying boards");
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
        console.log(err);
        throw new Error("error displaying board");
      });
  };

  const postBoard = (boardData) => {
    postBoardAsync(boardData)
      .then((newBoard) => {
        setBoardData((oldData) => [...oldData, newBoard]);
      })
      .catch((err) => {
        console.log(err.message);
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
      });
  };

  // not sure if we want/need these to be in a helper function
  const handleNewBoard = (formFields) => {
    postBoard(formFields);
  };

  const handleNewCard = (formFields) => {
    postCard(formFields);
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

  return (
    <main className="App">
      <h1>Inspiration Board</h1>
      <BoardList boardData={boardData} selectBoard={selectBoard} />
      <h2>Selected Board</h2>
      {/* helper function for these ternarys */}
      <div>
        {selectedBoardId
          ? `${getSelectedBoard(selectedBoardId).title} by ${
              getSelectedBoard(selectedBoardId).creator
            }`
          : "choose a board!"}
      </div>
      <div>
        {selectedBoardId ? (
          <CardList
            cardData={getSelectedBoard(selectedBoardId).cards}
            onDeleteCard={handleDelete}
            onAddLike={handleLike}
          />
        ) : (
          ""
        )}
      </div>

      <NewBoardForm onBoardSubmit={handleNewBoard} />
      {selectedBoardId ? <NewCardForm onCardSubmit={handleNewCard} /> : ""}
    </main>
  );
}

export default App;
