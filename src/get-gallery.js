import deathNote from "./images/death-note.jpg";
import breakingBad from "./images/breaking-bad.jpg";
import gameOfThrones from "./images/game-of-thrones.jpg";
import theMist from "./images/the-mist.jpg";
import theWalkingDead from "./images/the-walking-dead.jpg";
import theWire from "./images/the-wire.jpg";

export default function getGallery() {
  return [
    {
      id: "deathNote",
      image: deathNote,
      title: "deathNote"
    },
    {
      id: "breakingBad",
      image: breakingBad,
      title: "Breaking Bad"
    },
    {
      id: "gameOfThrones",
      image: gameOfThrones,
      title: "Game Of Thrones"
    },
    {
      id: "theMist",
      image: theMist,
      title: "The Mist"
    },
    {
      id: "theWalkingDead",
      image: theWalkingDead,
      title: "The Walking Dead"
    },
    {
      id: "theWire",
      image: theWire,
      title: "The Wire"
    }
  ];
}
