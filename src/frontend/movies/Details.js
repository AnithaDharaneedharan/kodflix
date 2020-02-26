import React from "react";
import { Redirect } from "react-router-dom";



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
    fetch("/rest/shows")
      .then(response => response.json())
      .then(shows => {
        let showId = this.props.match.params.showId;
        let showName = shows.shows.find(show => show.id === showId);
        this.setState({ showName });
      });

    //setTimeout( function () { return this.setState({message: "Coming soon! :)"})} , 3000)
    // setTimeout(() => {
    //   this.setState({ message: "Coming soon! :)" });
    // }, 3000);

    // let show = getGallery.find(
    //   cover => cover.id === this.props.match.params.details
    // );

    // this.setState({ showName: show });

    // // if (show) {
    // //   return this.setState({ showName: show });
    // // } else {
    // //   return <Redirect to="/not-found" />;
    // // }
  };

  render() {
    let show = this.state.showName;

    if (show) {
      return show.id ? <DetailsContent showName={show} /> : <div />;
    } else {
      return <Redirect to="/not-found" />;
    }
  }
}

function DetailsContent({ showName }) {
  return (
    <div className="details">
      <div>
        <div className="movie-container">
          <div className="cover">
            <img
              src={require(`../images/${showName.id}.jpg`)}
              alt={showName.title}
            ></img>
          </div>
          <div className="synopsis">{showName.synopsis}</div>
        </div>
      </div>
    </div>
  );
}
