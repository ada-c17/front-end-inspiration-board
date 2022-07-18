import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import axios from "axios";
import Board from "./components/Board";

const kBaseUrl = "https://in5piration-board.herokuapp.com/";

export const postBoardAsync = (boardData) => {
  const requestBody = { ...boardData };

  return axios
    .post(`${kBaseUrl}/boards`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error posting board");
    });
};

export const postCardAsync = (cardData) => {
  const requestBody = { ...cardData };
  // need to extract board id somehow: not like this
  const boardId = cardData.boardId;

  return axios
    .post(`${kBaseUrl}/boards/${boardId}/cards`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error posting board");
    });
};

// API call (patch) to update likeCount for a single card
export const likeCardAsync = (cardId) => {};

// API call (delete) to delete card by id
export const deleteCardAsync = (cardId) => {};

export const getAllBoardsAsync = () => {
  return axios
    .get(`${kBaseUrl}/boards/`)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error getting all boards");
    })
}

export const selectBoardAsync = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}`)
    .then((response) => {
      return response.data
  })
    .catch((err) => {
      console.log(err);
      throw new Error(`error getting board ${boardId}`);
  });
}
