import { Card } from "./Card";
import { CreateCard } from "./CreateCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "./Container";

export const Board = ({ board }) => {
  // const [cardData, setCardData] = useState([]);

  // const removeCard = (id) => {
  //   const newCards = cardData.filter((card) => {
  //     return card.id !== id;
  //   });

  //   setCardData(newCards);
  // };

 

  return <Container title="Selected Board">{board?.title ?? ""}</Container>;
};
