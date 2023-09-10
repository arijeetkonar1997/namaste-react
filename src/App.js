import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
