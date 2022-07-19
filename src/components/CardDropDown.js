import React from "react";
import { Card } from "./Card";
import { Container } from "./Container";

export const CardDropDown = ({ cards }) => {
  return (
    <Container title="Cards" width="lg">
      <div style={{ padding: 10, display: "flex" }}>
        {cards?.map((each) => (
          <Card {...each} />
        ))}
      </div>
    </Container>
  );
};
