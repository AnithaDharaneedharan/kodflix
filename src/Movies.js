import React from "react";
import { Link }from "react-router-dom";

function Movies(props) {
  return (

      <div className="item ">
        <Link to ={`/${props.id}`}>
        <img alt={`${props.name} logo`} src={props.logo} />
        <div className="overlay">{props.name}</div>
        </Link>
   
      </div>

     
  
  );
}

export default Movies;

// <div className="container">
// <div className="item ">
//   <img alt="movie_poster" src={deathNote} />
//   <div className="overlay"> death note</div>
// </div>

// <div className="item ">
//   <img alt="movie_poster" src={breakingBad} />
//   <div className="overlay"> breakingBad</div>
// </div>

// <div className="item ">
//   <img alt="movie_poster" src={gameOfThrones} />
//   <div className="overlay"> gameOfThrones</div>
// </div>
// </div>

// <div className="container">
// <div className="item ">
//   <img alt="movie_poster" src={theMist} />
//   <div className="overlay"> theMist</div>
// </div>
// <div className="item ">
//   <img alt="movie_poster" src={theWalkingDead} />
//   <div className="overlay"> theWalkingDead</div>
// </div>
// <div className="item ">
//   <img alt="movie_poster" src={theWire} />
//   <div className="overlay"> theWire</div>
// </div>
// </div>
