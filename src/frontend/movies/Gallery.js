import React from "react";
import Movies from "./Movies.js";


export default class Gallery extends React.Component {

  constructor() {
    super();
    this.state = { shows: []};
  }
  componentDidMount() {
    fetch('/rest/shows')
      .then(response => response.json())
      .then(shows => {
      
        this.setState({ shows: shows.shows });
      });
  }

  render() {
  
    return (
   
        <div className="container"> {
          this.state.shows.map(show => {
            return (
              <Movies key={show.id} id={show.id} title={show.title} />
            );
          })
        }
        </div>
        
   
    );
  }
}



