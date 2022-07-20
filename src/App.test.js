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
  await user.click(screen.getByText(/new/i));
  expect(screen.getByText(/Quantum Realm/i)).toBeInTheDocument();
});

test("landing on a board page", () => {
  const history = createMemoryHistory();
  history.push("/4");
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  // expect(screen.getByText(/belongs/i)).toBeInTheDocument();
});

// test("landing on a board page testing", () => {
//   let testHistory, testLocation;
//   render(
//     <MemoryRouter initialEntries={["/"]}>
//       <App />
//       <Route
//         path="*"
//         render={({ history, location }) => {
//           testHistory = history;
//           testLocation = location;
//           return null;
//         }}
//       />
//     </MemoryRouter>
//   );

//   userEvent.click(screen.getByRole("button", { name: /Save/ }));

//   // assert about url
//   expect(testLocation.pathname).toBe("/products");
//   const searchParams = new URLSearchParams(testLocation.search);
//   expect(searchParams.has("id")).toBe(true);
//   expect(searchParams.get("id")).toEqual("1234");
// });
