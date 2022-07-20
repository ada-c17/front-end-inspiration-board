import { useState, useEffect } from "react";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import Board from "./components/Board";
import {
  postBoardAsync,
  postCardAsync,
  likeCardAsync,
  deleteCardAsync,
  selectBoardAsync,
  getAllBoardsAsync,
  getAllCardsAsync,
} from "./apiCalls";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  // const [cardData, setCardData] = useState([]);

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

        // setCardData(board.cards);
        console.log(board);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("error displaying board");
      });
  };

  // const displayAllCards = () => {
  //   getAllCardsAsync()
  //     .then((cards) => {
  //       setCardData(cards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       throw new Error("error displaying boards");
  //     });
  // };

  // useEffect(() => {
  //   displayAllCards();
  // }, [cardData]);

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
      .then((selectedBoard) => {
        setBoardData((oldBoardData) => {
          const newBoardData = oldBoardData.map((board) => {
            if (board.boardId === selectedBoardId) {
              return selectedBoard;
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
      <p>
        {selectedBoardId
          ? `${getSelectedBoard(selectedBoardId).title} by ${
              getSelectedBoard(selectedBoardId).creator
            }`
          : "choose a board!"}
      </p>
      <p>
        {selectedBoardId ? (
          <CardList cardData={getSelectedBoard(selectedBoardId).cards} />
        ) : (
          ""
        )}
      </p>

      <NewBoardForm onBoardSubmit={handleNewBoard} />
      {selectedBoardId ? <NewCardForm onCardSubmit={handleNewCard} /> : ""}
    </main>
  );
}

export default App;
