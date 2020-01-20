import React from "react";
import Movies from "./Movies.js";
import deathNote from "./images/death-note.jpg";
import breakingBad from "./images/breaking-bad.jpg";
import gameOfThrones from "./images/game-of-thrones.jpg";
import theMist from "./images/the-mist.jpg";
import theWalkingDead from "./images/the-walking-dead.jpg";
import theWire from "./images/the-wire.jpg";

export default function Gallery() {
  return (
    <div>
      <div className="container">
        <Movies name="DeathNote" logo={deathNote} id="deathNote"></Movies>
        <Movies name="breakingBad" logo={breakingBad} id="breakingBad"></Movies>
        <Movies name="gameOfThrones" logo={gameOfThrones} id="gameOfThrones"></Movies>
     
        <Movies name="theMist" logo={theMist} id="theMist"></Movies>
        <Movies name="theWalkingDead" logo={theWalkingDead} id="theWalkingDead"></Movies>
        <Movies name="theWire" logo={theWire} id="theWire"></Movies>
      </div>
    </div>
  );
}
