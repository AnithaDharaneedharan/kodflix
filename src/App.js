import React from "react";
import deathNote from "./images/death-note.jpg";
import breakingBad from "./images/breaking-bad.jpg";
import gameOfThrones from "./images/game-of-thrones.jpg";
import theMist from "./images/the-mist.jpg";
import theWalkingDead from "./images/the-walking-dead.jpg";
import theWire from "./images/the-wire.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Movie App</h1>

      <div className="container">
        <div className="item ">
          <img alt="movie_poster" src={deathNote} />
          <div className="overlay"> death note</div>
        </div>

        <div className="item ">
          <img alt="movie_poster" src={breakingBad} />
          <div className="overlay"> breakingBad</div>
        </div>

        <div className="item ">
          <img alt="movie_poster" src={gameOfThrones} />
          <div className="overlay"> gameOfThrones</div>
        </div>
      </div>

      <div className="container">
        <div className="item ">
          <img alt="movie_poster" src={theMist} />
          <div className="overlay"> theMist</div>
        </div>
        <div className="item ">
          <img alt="movie_poster" src={theWalkingDead} />
          <div className="overlay"> theWalkingDead</div>
        </div>
        <div className="item ">
          <img alt="movie_poster" src={theWire} />
          <div className="overlay"> theWire</div>
        </div>
      </div>
    </div>
  );
}

export default App;
