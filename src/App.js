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
    <main className="container">
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

      {/* <section id="selected-board">
        <h2>Selected Board</h2>
      </section> */}

      {selectedBoardId ? (
        <section id="display-cards">
          <h2>{getSelectedBoard(selectedBoardId).title}</h2>
          <CardList
            cardData={getSelectedBoard(selectedBoardId).cards}
            onDeleteCard={handleDelete}
            onAddLike={handleLike}
          />
        </section>
      ) : (
        ""
      )}
      <div className="board-and-card-forms">
        {/* helper function for these ternarys */}
        {selectedBoardId ? (
          <NewCardForm onCardSubmit={handleNewCard} />
        ) : (
          <NewBoardForm onBoardSubmit={handleNewBoard} />
        )}
      </div>
    </main>
  );
}

export default App;
