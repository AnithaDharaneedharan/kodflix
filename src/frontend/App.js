import React from "react";
import "./App.css";
import BestPractices from "./patterns/BestPractices";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./movies/Details";
import NotFound from "./movies/NotFound";
import Landing from "./movies/Landing";
// import ListComponent from './patterns/ListComponent';
// import ListComponentSample from "./patterns/ListComponentSample";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my App</h1>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/patterns" component={BestPractices}></Route>
          {/* <Route exact path="/dry" component={ListComponentSample}></Route> */}
          <Route exact path="/not-found" component={NotFound}></Route>
          <Route exact path="/:showId" component={Details}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
