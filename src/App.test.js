import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./app";

test("full app rendering/navigating'", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  const user = userEvent.setup();
  expect(
    screen.getByText(/Inspiration from the OtterSpace/i)
  ).toBeInTheDocument();
  await user.click(screen.getByText(/Create alternate world/i));
  expect(screen.getByText(/Arc of Infinity/i)).toBeInTheDocument();
});
