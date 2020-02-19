import React from "react";

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastClickedButton: "" };
  }

  render() {
    return (
      <div>
        <h1>The last clicked button is {this.state.lastClickedButton}</h1>
        <div>
        <div>
            <button
              className="my-button"
              onClick={() => this.setState({ lastClickedButton: "Create" })}
            >
              Create
            </button>
          </div>
          
          <div>
            <button
              className="my-button"
              onClick={() => this.setState({ lastClickedButton: "Update" })}
            >
              Update
            </button>
          </div>
          <div>
            <button
              className="my-button"
              onClick={() => this.setState({ lastClickedButton: "Read" })}
            >
              Read
            </button>
          </div>
          <div>
            <button
              className="my-button"
              onClick={() => this.setState({ lastClickedButton: "Delete" })}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
