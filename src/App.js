import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Movie App</h1>

      <BrowserRouter>
        <Route exact path="/" component={Gallery}></Route>
        <Route exact path="/:details" component={Details}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
