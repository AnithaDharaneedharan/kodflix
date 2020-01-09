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
      {/* <img alt="movie_poster" src={moviePoster} />  */}
      <div className="container">
        <div className="item">
          <img alt="movie_poster" src={deathNote} />
        </div>
        <div className="item">
          <img alt="movie_poster" src={breakingBad} />
        </div>
        <div className="item">
          <img alt="movie_poster" src={gameOfThrones} />
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img alt="movie_poster" src={theMist} />
        </div>
        <div className="item">
          <img alt="movie_poster" src={theWalkingDead} />
        </div>
        <div className="item">
          <img alt="movie_poster" src={theWire} />
        </div>
      </div>
    </div>
  );
}

export default App;

