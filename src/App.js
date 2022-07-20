import "./index.css";
import { useEffect, useState } from "react";
import NewBoardForm from "./components/NewBoardForm";
// import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

const BACKENDURL = "https://team-sunshine.herokuapp.com";

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentOwner, setCurrentOwner] = useState(null);
  const [apiError, setApiError] = useState(null);

  // array of card objects
  const [cardData, setCardData] = useState([]);

  // array of board objects
  const [boardData, setBoardData] = useState([]);

  const [cardSort, setCardSort] = useState("id");
  const sortFunctions = {
    id: (a, b) => {
      return a.card_id === b.card_id ? 0 : a.card_id < b.card_id ? -1 : 1;
    },
    message: (a, b) => {
      return a.message.toUpperCase() === b.message.toUpperCase()
        ? 0
        : a.message.toUpperCase() < b.message.toUpperCase()
        ? -1
        : 1;
    },
    likes: (a, b) => {
      return a.likes === b.likes ? 0 : a.likes > b.likes ? -1 : 1;
    },
  };

  const updateSortBy = (value) => {
    setCardSort(value);
    console.log(`the value passed in was ${value}`);
    // console.log(`the state is ${cardSort}`);
    console.log(sortFunctions[value]);
    const newCards = [...cardData];
    newCards.sort(sortFunctions[value]);
    console.log(newCards);
    setCardData(newCards);
  };

  const updateCurrentBoard = (id) => {
    axios
      .get(`${BACKENDURL}/boards/${id}`)
      .then((res) => {
        const title = res.data.title;
        const owner = res.data.owner;
        const cards = res.data.cards.map((card) => {
          return {
            card_id: card.card_id,
            message: card.message,
            likes: card.likes_count,
          };
        });
        setCurrentTitle(title);
        setCurrentOwner(owner);

        cards.sort(sortFunctions[cardSort]);
        setCardData(cards);
      })
      .catch((error) => {
        console.log(error);
      });
    setCurrentBoard(id);
  };

  const getAllBoards = () => {
    axios
      .get(`${BACKENDURL}/boards`)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            board_id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardData(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getAllBoards, []);

  const addBoardData = (boardinfo) => {
    axios
      .post(`${BACKENDURL}/boards`, boardinfo)
      .then((res) => {
        getAllBoards();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCardData = (cardInfo) => {
    console.log("adding card");
    // cardInfo: {"message":msg}
    cardInfo["board_id"] = currentBoard;
    axios
      .post(`${BACKENDURL}/cards`, cardInfo)
      .then((res) => {
        updateCurrentBoard(currentBoard);
        console.log(res);
      })
      .catch((err) => {
        setApiError(err.message);
        console.error(err.message);
      });
  };

  const likeCard = (cardID) => {
    console.log(`liking card ${cardID}`);
    axios
      .patch(`${BACKENDURL}/cards/${cardID}/like`)
      .then((res) => {
        console.log(res);
        updateCurrentBoard(currentBoard);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBoard = (id) => {
    axios
      .delete(`${BACKENDURL}/boards/${id}`)
      .then(() => {
        getAllBoards();
        setCurrentBoard(null);
        setCurrentTitle(null);
        setCurrentOwner(null);
        setCardData([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [boardFormVisible, setBoardFormVisible] = useState(true);
  const toggleFormVisible = () => {
    setBoardFormVisible(!boardFormVisible);
  };

  const deleteCard = (cardID) => {
    axios
      .delete(`${BACKENDURL}/cards/${cardID}`)
      .then((res) => {
        updateCurrentBoard(currentBoard);
        console.log(`deleting card ${cardID}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function Home() {
  //   return (
  //     <>
  //       {/* <main>
  //         <h2>Welcome to the homepage!</h2>
  //         <p>You can do this, I believe in you.</p>
  //       </main> */}
  //       <nav>
  //         <Link to="/about">About</Link>
  //       </nav>
  //     </>
  //   );
  // }

  // function About() {
  //   return (
  //     <>
  //       <main>
  //         {/* <h2>Who are we?</h2>
  //         <p>That feels like an existential question, don't you think?</p> */}
  //       </main>
  //       <nav>
  //         <Link to="/">Home</Link>
  //       </nav>
  //     </>
  //   );
  // }

  return (
    <section id="App">
      <header>
        <h1>Team Sunshine Inspiration Board</h1>
        <nav
          style={{
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Boards</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <section className="about">
        <Outlet />
      </section>
      <main>
        <BoardList
          currentBoard={currentBoard}
          boards={boardData}
          cards={cardData}
          setCurrentBoard={updateCurrentBoard}
        />
        <Board
          title={currentTitle}
          owner={currentOwner}
          boardId={currentBoard}
          cards={cardData}
          likeCardCallback={likeCard}
          deleteCallback={deleteBoard}
          addCardCallback={addCardData}
          deleteCardCallback={deleteCard}
          cardSortCallback={updateSortBy}
        />

        <NewBoardForm
          addBoardData={addBoardData}
          boardFormVisible={boardFormVisible}
          toggleFormVisible={toggleFormVisible}
        />
      </main>
    </section>
  );
}

export default App;
