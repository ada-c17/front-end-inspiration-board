import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./Styles/Board.css";
import Card from "./Card";
import NewCardForm from "./Forms/NewCardForm";
import UpdateBoardForm from "./Forms/UpdateBoardForm";
import SortMenu from "./SortMenu";
import VerifyDeleteBoard from "./VerifyDeleteBoard";
import { URL } from "../App";
import { BiSort } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { CgSidebarOpen } from "react-icons/cg";
import { BsStickiesFill } from "react-icons/bs";

const Board = ({ board, onDeleteCallback, updateBoardCallback }) => {
  const [cardData, setCardData] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");
  const [hideSort, setHideSort] = useState(true);
  const [hideBoardMenu, setHideBoardMenu] = useState(true);
  const [hideCardMenu, setHideCardMenu] = useState(true);
  const [hideDelete, setHideDelete] = useState(true);
  const [deleteAttempt, setDeleteAttempt] = useState(false);

  const shownBoardMenu = hideBoardMenu ? "hidden" : "board-menu-container";
  const shownCardMenu = hideCardMenu ? "hidden" : "card-menu-container";
  const shownSort = hideSort ? "hidden" : "shown";
  const shownDelete = hideDelete ? "hidden" : "shown";

  const getCards = () => {
    axios
      .get(`${URL}/boards/${board.id}/cards`)
      .then((response) => {
        const newData = response.data.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            likeCount: card.like_count,
          };
        });
        setCardData(newData);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => getCards(), [cardData]);

  const sortedCards = cardData.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "message" ? a[sortBy].toLowerCase() : a[sortBy];
    let sortByB = sortBy === "message" ? b[sortBy].toLowerCase() : b[sortBy];
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const validateCardData = (newCardInfo) => {
    if (!newCardInfo["message"]) {
      return alert("New card must have a message!");
    } else if (newCardInfo["message"].length > 40) {
      return alert(
        `Messages cannot be more than 40 characters, yours is ${newCardInfo["message"].length} long!`
      );
    } else return true;
  };

  const addNewCard = (newCard) => {
    validateCardData(newCard) &&
      axios
        .post(`${URL}/boards/${board.id}/cards`, newCard)
        .then((response) => {
          console.log("a new card has been posted");
          const cards = [...cardData, response.data];
          setCardData(cards);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const updateCard = (id, message) => {
    validateCardData({ message }) &&
      axios
        .patch(`${URL}/cards/${id}`, { message })
        .then(() => {
          const newCardData = cardData.map((card) => {
            if (card.id === id) {
              return {
                ...card,
                [message]: message,
              };
            } else {
              return card;
            }
          });
          setCardData(newCardData);
        })
        .catch((err) => {
          alert(err);
        });
  };

  const deleteCard = async (id) => {
    try {
      await axios.delete(`${URL}/cards/${id}`);
      const newCardData = cardData.filter((card) => card.id !== id);
      setCardData(newCardData);
    } catch (err) {
      alert(err);
    }
  };

  const updateLikes = async (id) => {
    try {
      await axios.patch(`${URL}/cards/${id}/like`);
      const newCardData = cardData.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            likeCount: card.likeCount + 1,
          };
        } else {
          return card;
        }
      });
      setCardData(newCardData);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="board--title ">
        <h1 className="insetshadow">{board.title}</h1>
        <h2 className="insetshadow">by {board.owner}</h2>
      </div>
      <div className="board--nav">
        {/* BOARD */}
        <div>
          <CgSidebarOpen
            className="icons"
            size={30}
            onClick={() => setHideBoardMenu(!hideBoardMenu)}
          />
          <section className={shownBoardMenu}>
            <div>
              <UpdateBoardForm
                board={board}
                updateBoardCallback={updateBoardCallback}
              />
            </div>
            <div>
              <TiDelete
                className="icons"
                size={30}
                onClick={() => {
                  setDeleteAttempt(true);
                  setHideDelete(!hideDelete);
                }}
              />
              <section className={shownDelete}>
                {deleteAttempt && (
                  <VerifyDeleteBoard
                    onDeleteCallback={onDeleteCallback}
                    onCancelCallback={() => {
                      setDeleteAttempt(false);
                    }}
                    id={board.id}
                  />
                )}
              </section>
            </div>
          </section>
        </div>
        {/* CARDS */}
        <div>
          <BsStickiesFill
            className="icons"
            size={25}
            onClick={() => setHideCardMenu(!hideCardMenu)}
          />
          <section className={shownCardMenu}>
            <div>
              <NewCardForm boardId={board.id} onAddCardCallback={addNewCard} />
            </div>
            <div>
          <BiSort
            className="icons"
            size={30}
            onClick={() => setHideSort(!hideSort)}
          />
          <section className={shownSort}>
            <div className="sort-menu--container">
              <SortMenu
                sortBy={sortBy}
                onSortByChange={(sortOption) => {
                  setSortBy(sortOption);
                }}
                orderBy={orderBy}
                onOrderByChange={(orderOption) => {
                  setOrderBy(orderOption);
                }}
              />
            </div>
          </section>
        </div>
          </section>
        </div>

      </div>

      <div className="board--cards">
        <div className="cards">
          {sortedCards.map((card, index) => {
            return (
              <Card
                key={index}
                id={card.id}
                message={card.message}
                likeCount={card.likeCount}
                updateLikes={updateLikes}
                deleteCard={deleteCard}
                updateCard={updateCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onDeleteCallback: PropTypes.func.isRequired,
  updateBoardCallback: PropTypes.func.isRequired,
};

export default Board;
