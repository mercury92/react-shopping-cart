import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import {List} from "./List";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <div id="main">
        <header>
          <h1>Codecamp Market Place</h1>
        </header>
        <div class="container">
          <List />
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
