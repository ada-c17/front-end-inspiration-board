import React from "react";
import { useState, useReducer, useEffect } from "react";
import "./App.css";
import "./dropdown.css";
import axios from "axios";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import About from "./Pages/about";
import BoardsPage from "./Pages/boards";
import Home from "./Pages/home";
import CardsPage from "./Pages/cards";
import Header from "./Components/ui/Header";
import "./Styles/header.css";
import NotFound from "./Pages/NotFound";
import Selected from "./Pages/Selected";
import Footer from "./Components/ui/Footer";
function App() {
  //BOARDS
  const boardApiToJson = (board) => {
    const { id, title, owner } = board;
    return { id, title, owner };
  };
  //GET cards by board Id
  const displayCards = async (id) => {
    const response = await axios.get(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`
    );
    setCards(response.data);
  };
  //setSelected Board by id
  const getSelectedBoard = async (id) => {
    const resp = await axios.get(
      `https://orange-purple-inspo-board.herokuapp.com/boards/${id}`
    );
    setSelectedBoard(resp.data.board);
  };

  const addCardToBoard = (newCard) => {
    const newCardData = [...cards];
    const nextId = Math.max(...newCardData.map((card) => card.id)) + 1;

    newCardData.push({
      id: nextId,
      likes_count: 0,
    });
  };
  //submit forms
  const addBoardData = (newBoard) => {
    const newBoardData = [...boards];
    const nextId = Math.max(...newBoardData.map((board) => board.id)) + 1;

    newBoardData.push({
      id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoards(newBoardData);
  };

  //submit card forms
  const addCardData = (newCard) => {
    const newCardData = [...cards];
    const nextId = Math.max(...newCardData.map((card) => card.id)) + 1;

    newCardData.push({
      id: nextId,
      message: newCard.message,
    });
    setCards(newCardData);
  };
  //boards state
  const [boards, setBoards] = useState([]);
 
  //card state
  const [cards, setCards] = useState([]);

  //value of selected board
  const [value, setValue] = useState(null);

  //GET request boards
  const getBoards = async () => {
    const response = await axios.get(
      "https://orange-purple-inspo-board.herokuapp.com/boards"
    );
    setBoards(response.data);
  };

  useEffect(() => {
    getBoards();
  }, []);

  //Delete Board Route
  const deleteABoard = (id) => {
    return axios
      .delete(`https://orange-purple-inspo-board.herokuapp.com/boards/${id}`)
      .then((response) => {
        return boardApiToJson(response.data);
      });
  };

  //delete board
  const removeBoard = (id) => {
    // return deleteABoard(id).then(() => {
    //   const newBoardData = boards.filter((board) => {
    //     return board.id !== id;
    //   });
    //   console.log("i'm inside remove board");
    //   console.log(`value: ${value}`);
    //   setBoards(newBoardData);
    //   return getBoards();
    // });
    return deleteABoard(id).then(getBoards).then(()=>{setValue(null);});
  };

  //CARDS
  const cardApiToJson = (card) => {
    const { id, message, likes_count } = card;
    return { id, message, likes_count };
  };

  //PATCH route to increase likes -updateAPI
  const incLikes = async (id) => {
    const response = await axios
      .patch(
        `https://orange-purple-inspo-board.herokuapp.com/cards/${id}/increase_likes_count`
      )
      .then((response) => {
        return cardApiToJson(response.data);
      });
  };

  //Add likes -change state on webpage
  const addLikes = (id) => {
    incLikes(id).then(() => {
      const newLikedData = cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            likes_count: (card.likes_count = card.likes_count + 1),
          };
        } else {
          return card;
        }
      });
      setCards(newLikedData);
    });
  };
  //DELETE route to delete Card -update api
  const deleteCard = (id) => {
    return axios
      .delete(`https://orange-purple-inspo-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        return cardApiToJson(response.data);
      });
  };

  //delete card
  const removeCard = (id) => {
    deleteCard(id).then((updatedCard) => {
      const newCardData = cards.filter((card) => {
        return card.id !== id;
      });
      setCards(newCardData);
    });
  };

  //adds form elements to dropdown in board component
  //send this state to SelectedBoard
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
  });

  //updates selectedBoard state & adds selectedBoard to SelectedBoard component onClick
  const boardChange = (e) => {
    setSelectedBoard(e.target.value);
    if (e.target.value) {
      // setSelectedHidden(false);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/boards/:boardID"
          element={
            <Selected
              setSelectedBoard={setSelectedBoard}
              boards={selectedBoard}
              cards={cards}
              addLikes={addLikes}
              deleteCard={deleteCard}
              removeCard={removeCard}
              removeBoard={removeBoard}
              value={value}
            />
          }
        />
        <Route
          path="/boards"
          element={
            <BoardsPage
              getSelectedBoard={getSelectedBoard}
              handleChange={boardChange}
              options={boards}
              prompt="Select Board"
              value={value}
              onChange={(value) => setValue(value)}
              addBoardData={addBoardData}
              displayCards={displayCards}
              removeBoard={removeBoard}
              getBoards={getBoards}
            />
          }
        />
        <Route
          path="/cards"
          element={
            <CardsPage
              addCardData={addCardData}
              options={boards}
              boards={boards}
              setBoards={setBoards}
              cards={cards}
              // postCardToBoard={postCardToBoard}
              selectedBoard={selectedBoard}
              clickedBoard={(value) => setValue(value)}
              addCardToBoard={addCardToBoard}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
