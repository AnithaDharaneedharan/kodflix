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
      title: "Death Note",
      synopsis:
        "Death Note is a 2017 American neo-noir supernatural thriller film loosely adapted from the Japanese manga of the same name created by Tsugumi Ohba and Takeshi Obata. "
    },
    {
      id: "breakingBad",
      image: breakingBad,
      title: "Breaking Bad",
      synopsis: "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan."
    },
    {
      id: "gameOfThrones",
      image: gameOfThrones,
      title: "Game Of Thrones",
      synopsis: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO."
    },
    {
      id: "theMist",
      image: theMist,
      title: "The Mist",
      synopsis: "The Mist is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO."
    },
    {
      id: "theWalkingDead",
      image: theWalkingDead,
      title: "The Walking Dead",
      synopsis: "The Walking Dead an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO."
    },
    {
      id: "theWire",
      image: theWire,
      title: "The Wire",
      synopsis: "The Wire is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO."
    }
  ];
}
