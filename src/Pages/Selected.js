import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import Heart from "../Images/heart.png";
import Exit from "../Images/exit.png";
import "../Styles/cards.css";
import Card from "../Components/ui/Card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
const Selected = ({
  deleteBoard,
  addCard,
  boards,
  minusLikes,
  addLikes,
  cards,
  removeCard,
  removeBoard,
  setPrompt,
  deleteCard,
  value,
}) => {
  const getCardsJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          minusLikes={minusLikes}
          addLikes={addLikes}
          likes_count={card.likes_count}
          board_id={card.board_id}
          deleteCard={deleteCard}
          removeCard={removeCard}
        />
      );
    });
  };
  let navigate = useNavigate();

  const addNav = () => {
    navigate("/cards");
  };

  const deleteThisBoard = () => {
    removeBoard(boards.id);
    navigate("/boards");
    value.owner = "";
  };

  return (
    <div className="App">
      <section>
        <h4>Selected Board</h4>
        <div>{`Title: ${boards.title} By: ${boards.owner}`}</div>
        <motion.section
          className="cards"
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          {getCardsJSX(cards)}
        </motion.section>
        <br />
        <div className="board-buttons">
          <button className="form-button" onClick={deleteThisBoard}>
            Remove Board
          </button>
          <button className="form-button" onClick={addNav}>
            Add Cards
          </button>
        </div>
      </section>
      <motion.span
        animate={{ x: -80, scale: 1 }}
        initial={{ x: -30, scale: 1.2 }}
        whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        transition={{ duration: 1 }}
      >
        <Link to="/boards" className="link-button">
          Boards Home
        </Link>
      </motion.span>
    </div>
  );
};

// SelectedBoard.propTypes = {
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
// };

export default Selected;
