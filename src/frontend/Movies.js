import React from "react";
import { Link } from "react-router-dom";

function Movies(props) {
  return (
    <div className="item ">
      <Link to={`/${props.id}`}>
        <img alt={`${props.name} logo`} src={props.logo} />
        <div className="overlay">{props.name}</div>
      </Link>
    </div>
  );
}

export default Movies;
