import React from "react";
import { Redirect } from "react-router-dom";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      message:
        "Hello , this will be the details page for each Movie and TV show",
      show: {}
    };
  }

  componentDidMount = () => {
    fetch("/rest/shows/")
      .then(response => response.json())
      .then(shows => {
        let showId = this.props.match.params.showId;
        let show = shows.shows.find(show => show.id === showId);
        this.setState({ show });
      });
  };

  render() {
    let show = this.state.show;
    if (show) {
      return show.id ? <DetailsContent show={show} /> : <div />;
    } else {
      return <Redirect to="/not-found" />;
    }
  }
}

function DetailsContent({show}) {

  return(
    <div className='details'>
    <h1>{show.title}</h1>
    <div className='movie-container'>
        <h3 className='synopsis'>
            {show.synopsis}
        </h3>
        <div className='cover'>
            <img
                src={require(`../images/${show.id}.jpg`)}
                alt={show.title} />
        </div>
    </div>
</div>
  )

}
