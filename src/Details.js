import React from "react";
import { Link } from "react-router-dom";
import getGallery from "./get-gallery";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      message:
        "Hello , this will be the details page for each Movie and TV show"
    };
  }

  componentDidMount = () => {
    //setTimeout( function () { return this.setState({message: "Coming soon! :)"})} , 3000)
    setTimeout(() => {
      this.setState({ message: "Coming soon! :)" });
    }, 3000);
  };

  getMovieTitle = () => {
   
     return getGallery().find(cover => cover.id === this.props.match.params.details).title ;
  
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <h1>{this.getMovieTitle()}</h1>
        <Link to="/">Back to homepage</Link>
      </div>
    );
  }
}
