import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./Details";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Movie App</h1>

      <BrowserRouter>
     <Switch>
        <Route exact path="/" component={Gallery}></Route>
        <Route exact path="/not-found" component={NotFound}></Route>
        <Route exact path="/:details" component={Details}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
