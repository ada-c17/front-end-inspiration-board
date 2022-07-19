import React from "react";
import { Header } from "./Header";
import "./Container.css";

export const Container = ({ title, children, width }) => {
  const containerClass = width === "lg" ? "container__lg" : "";
  return (
    <div className={`container ${containerClass}`}>
      <Header title={title} />
      <div>{children}</div>
    </div>
  );
};
