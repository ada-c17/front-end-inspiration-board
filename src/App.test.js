import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(
    <Route>
      <App />
    </Route>
  );
  const linkElement = screen.getByText(/Inspiration from the OtterSpace/i);
  expect(linkElement).toBeInTheDocument();
});
