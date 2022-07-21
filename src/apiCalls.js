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

export const postCardAsync = (cardData, boardId) => {
  const requestBody = { ...cardData };

  return axios
    .post(`${kBaseUrl}/boards/${boardId}/cards`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error posting card");
    });
};

// API call (patch) to update likeCount for a single card
export const likeCardAsync = (cardId, boardId) => {
  return axios
    .patch(`${kBaseUrl}boards/${boardId}/cards/${cardId}/like`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error liking card");
    });
};

// API call (delete) to delete card by id
export const deleteCardAsync = (cardId, boardId) => {
  return axios
    .delete(`${kBaseUrl}/boards/${boardId}/cards/${cardId}`) // promise1
    .catch((err) => {
      console.log(err);
      throw new Error(`error removing card ${cardId}`);
    });
};

export const getAllBoardsAsync = () => {
  return axios
    .get(`${kBaseUrl}/boards/`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error getting all boards");
    });
};

export const selectBoardAsync = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(`error getting board ${boardId}`);
    });
};

// export const getAllCardsForBoardAsync = (boardId) => {
//   return axios
//     .get(`${kBaseUrl}/boards/${boardId}/cards`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//       throw new Error("error getting cards for board id:");
//     });
// };
