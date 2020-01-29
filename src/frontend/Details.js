import React from "react";
import { Redirect, Link } from "react-router-dom";
import getGallery from "./get-gallery";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      message:
        "Hello , this will be the details page for each Movie and TV show",
      showName: {}
    };
  }

  componentDidMount = () => {
    //setTimeout( function () { return this.setState({message: "Coming soon! :)"})} , 3000)
    setTimeout(() => {
      this.setState({ message: "Coming soon! :)" });
    }, 3000);

    let show = getGallery().find(
      cover => cover.id === this.props.match.params.details
    );

    this.setState({ showName: show });

    // if (show) {
    //   return this.setState({ showName: show });
    // } else {
    //   return <Redirect to="/not-found" />;
    // }
  };

  render() {
    return (
      <div className="details">
        <div>{this.state.message}</div>
        {this.state.showName ? (
          <div>
            <h1>{this.state.showName.title}</h1>
            <div className="movie-container">
              <div className="cover">
                <img
                  src={this.state.showName.image}
                  alt={this.state.showName.title}
                ></img>
              </div>
              <div className="synopsis">{this.state.showName.synopsis}</div>
            </div>
          </div>
        ) : (
          <Redirect to="/not-found" />
        )}

        <Link to="/">Back to homepage</Link>
      </div>
    );
  }
}
