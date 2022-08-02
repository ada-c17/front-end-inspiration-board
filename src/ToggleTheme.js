import React, { useContext } from "react";
import { ThemeContext } from "./App.js";

export default function ToggleTheme() {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "App",
    color: darkTheme ? "App" : "333",
  };

  return <div style={themeStyles}></div>;
}
