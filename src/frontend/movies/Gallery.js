import React from "react";
import Movies from "./Movies.js";

export default class Gallery extends React.Component {

  constructor() {
    super();
    this.state = {shows: []}
  }
  componentDidMount() {
    fetch("/rest/shows")
      .then(response => response.json())
      .then(shows => {
       this.setState({shows: shows.shows})
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.shows.map(cover => {
            return (
              <Movies
                key={cover.id}
                name={cover.title}
                logo={cover.image}
                id={cover.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
