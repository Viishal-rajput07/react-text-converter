import React from "react";
import ReactDOM from "react-dom/client";
// import Booklist from "./Booklist";
// import App from './App2'
// import App from './App'
import Game from './Tictactoe'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
