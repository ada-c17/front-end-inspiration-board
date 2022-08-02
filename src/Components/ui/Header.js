import React from "react";
import { Link } from "react-router-dom";
import Tea from "../../Images/title_tea.png";
// import Hplant from "../Images/hanging_plant.png";
import Plant from "../../Images/plant.png";
import Sleep from "../../Images/sleeping_cat.png";
import Books from "../../Images/book-stack.png";
import { motion } from "framer-motion/dist/framer-motion";
import "../../Styles/animate.css";
import "../../Styles/header.css";
import "../../Styles/cards.css";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="animate">♥ InspoBoard ♥</h1>
      <motion.img
        src={Tea}
        width={80}
        height={80}
        alt=""
        whileHover={{ scale: 1.5 }}
        initial={{ scale: 1 }}
      />
      <nav className="links">
        <motion.img src={Plant} width={70} height={70} alt="" />
        <img src={Books} width={70} height={70} alt="" className="image" />
        <motion.span whileHover={{ scale: 1.1 }} initial={{ scale: 1 }}>
          <Link to="/" className="link-button">
            Home
          </Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }} initial={{ scale: 1 }}>
          <Link to="/About" className="link-button">
            About
          </Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }} initial={{ scale: 1 }}>
          <Link to="/boards" className="link-button">
            Boards
          </Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }} initial={{ scale: 1 }}>
          <Link to="/cards" className="link-button">
            Cards
          </Link>
        </motion.span>
      </nav>
      <img src={Sleep} width={80} height={80} alt="" />
    </header>
  );
};

export default Header;
