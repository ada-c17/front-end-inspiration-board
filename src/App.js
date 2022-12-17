import "./App.css";
import CardList from "./components/CardList";
import axios from "axios";
import CardForm from "./components/CardForm";
import BoardForm from "./components/BoardForm";
import DropdownMenu from "./components/DropdownMenu";
import { useState, useEffect } from "react";
import Board from "./components/Board";

function App() {
  const URL = "https://team-green-inspo.herokuapp.com";
  const [boardData, setBoardData] = useState([]);
  const [chosenBoard, setChosenBoard] = useState({});
  const [cardData, setCardData] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const createNewCard = ({ message, board_id }) => {
    axios
      .post(`${URL}/boards/${board_id}/cards`, {
        message: message,
      })
      .then((response) => {
        console.log("making new card");
        //console.log(response);

        const nextId = response.data.card.id;
        const newCard = {
          card_id: nextId,
          board_id: board_id,
          message: message,
          likes: 0,
        };
        const newCardData = [...cardData];
        newCardData.push(newCard);
        setCardData(newCardData);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Couldn't make new card. Please select a board and enter a message."
        );
      });
  };

  const deleteOneCard = (card_id) => {
    axios
      .delete(`${URL}/cards/${card_id}`)
      .then(() => {
        const newCardData = cardData.filter((card) => card_id !== card.card_id);
        setCardData(newCardData);
      })
      .catch((error) => {
        alert("Couldn't delete card. Please refresh and try again.");
        // console.log("delete fail");
        console.log(error);
      });
  };

  const deleteOneBoard = (board_id) => {
    axios
      .delete(`${URL}/boards/${board_id}`)
      .then(() => {
        const newBoardData = boardData.filter((board) => board_id !== board.id);
        console.log(newBoardData);
        setBoardData(newBoardData);
        setChosenBoard({});
        setCardData([]);
      })
      .catch((error) => {
        alert("Couldn't delete board. Please refresh and try again.");
        // console.log("delete fail");
        console.log(error);
      });
  };

  const likeOneCard = (card_id) => {
    axios
      .patch(`${URL}/cards/${card_id}`)
      .then((response) => {
        const newCardData = cardData.map((card) => {
          if (card.card_id === card_id) {
            card.likes++;
          }
          return card;
        });
        //console.log(newCardData);
        setCardData(newCardData);
      })
      .catch((error) => {
        console.log(error);
        console.log("could not update like count");
      });
  };

  const getCardDataFromAPI = (board_id) => {
    axios
      .get(`${URL}/boards/${board_id}/cards`)
      .then((response) => {
        setCardData(response.data.cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createNewBoard = (newBoard) => {
    axios
      .post(`${URL}/boards`, newBoard)
      .then((response) => {
        // console.log(response);
        newBoard.id = response.data.board.id;
        let newBoardData = [...boardData];
        newBoardData.push(newBoard);
        setBoardData(newBoardData);
      })
      .catch((error) => {
        console.log(error);
        alert("Couldn't make new board. Enter a title and owner.");
      });
  };

  const selectBoard = (board) => {
    setChosenBoard(board);
    getCardDataFromAPI(board.id);
  };

  const boardTitles = boardData.map((board) => {
    return (
      <li key={board.id}>
        <Board board={board} onBoardSelect={selectBoard}></Board>
      </li>
    );
  });

  const handleCardData = (event) => {
    const option = event.value;
    setSortOption(option);
  };

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  return (
    <body className="container">
      <header>
        <h1>Team Green's Board</h1>
      </header>
      <main>
        <div className="top-section">
          <section className="board-section">
            <section className="boards">
              <h2>Boards</h2>
              <ul className="board-titles">{boardTitles}</ul>
            </section>
            <section className="selected-board">
              <h2>Selected Board</h2>
              <p>
                {chosenBoard.id
                  ? `${chosenBoard.title} - ${chosenBoard.owner}`
                  : "Please select a board"}
              </p>
              <button onClick={() => deleteOneBoard(chosenBoard.id)}>
                Delete
              </button>
            </section>
          </section>
          <section className="board-form-section">
            <section className="form">
              {isBoardFormVisible ? (
                <BoardForm createBoardCallback={createNewBoard}></BoardForm>
              ) : (
                ""
              )}
            </section>
            <span className="hide-button" onClick={toggleBoardForm}>
              {isBoardFormVisible
                ? "Hide New Board Form"
                : "Show New Board Form"}
            </span>
          </section>
        </div>
        <div className="bottom-section">
          <DropdownMenu
            handleCardDataCallback={handleCardData}
            cardData={cardData}
          />
          <section className="card-section">
            <CardList
              cardsData={cardData}
              deleteOneCardCallback={deleteOneCard}
              likeOneCardCallback={likeOneCard}
              sortOption={sortOption}
            />
          </section>
          <section className="card-form-section">
            <CardForm
              createNewCardCallback={createNewCard}
              board_id={chosenBoard.id}
            ></CardForm>
          </section>
        </div>
      </main>
      <footer>
        <p>&#x2764; Made by: Ruge, Megan, Diana, and Lin &#x2764;</p>
      </footer>
    </body>
  );
}

export default App;
