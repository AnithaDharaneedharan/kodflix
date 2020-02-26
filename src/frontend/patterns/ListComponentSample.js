import React from "react";
import ListItemComponentSample from "./ListItemComponentSample";

export default class ListComponentSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastClickedButton: "" };
  }

  click = title => this.setState({ lastClickedButton: title });

  render() {
    return (
      <div className="topic">
        <h1>The last clicked button is {this.state.lastClickedButton}</h1>

        <ListItemComponentSample
          title="Create"
          click={this.click}
          className="button-secondary"
        />

        <ListItemComponentSample title="Create" click={this.click} />

        <ListItemComponentSample title="Update" click={this.click} />

        <ListItemComponentSample title="Delete" click={this.click} />
      </div>
    );
  }
}
