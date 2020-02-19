import React from "react";
import Movies from "./Movies.js";
import getGallery from "./get-gallery";

export default class Gallery extends React.Component {
  componentDidMount() {
    fetch("/rest/shows")
      .then(response => response.json())
      .then(data => {
        console.log("here is: ", data);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          {getGallery.map(cover => {
            return (
              <Movies
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
