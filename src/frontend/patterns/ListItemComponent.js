import React from "react";

export default class ListItemComponent extends React.Component {
  render() {
    return (
      <button
        className="my-button"
        onClick={() => this.props.click(this.props.title)}
      >
        {this.props.title}
      </button>
    );
  }
}
