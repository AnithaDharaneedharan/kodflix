import React from "react";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <Link to="/">Back to homepage</Link>
      </div>
    );
  }
}