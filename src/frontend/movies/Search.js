import React from "react";
import { Redirect } from "react-router-dom";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      getMovieNames: ""
    };
  }

  componentDidMount() {
    fetch("/rest/shows")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  searchMovie(placeholder) {
    let getMovieNames = this.state.data.shows.find(
      movie => movie.title === placeholder
    );

    if (getMovieNames) {
      this.setState({ getMovieNames: getMovieNames.title });
    } else {
      this.setState({ getMovieNames: <Redirect to="/not-found" /> });
    }
  }

  change(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search by movie name"
          id="searchValue"
          value={this.state.value}
          onChange={event => this.change(event.target.value)}
        />
        <button
          className="search"
          onClick={() => this.searchMovie(this.state.searchValue)}
        >
          Search
        </button>
        <p>The movie name you searched for is {this.state.getMovieNames}</p>
      </div>
    );
  }
}
