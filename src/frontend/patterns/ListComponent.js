import React from "react";
import ListItemComponent from "./ListItemComponent"
// Dirty
export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastClickedButton: "" };
  }
 click= (title) => this.setState({ lastClickedButton: title });
  render() {
     
    return (
      <div className="topic">
        <h1>The last clicked button is {this.state.lastClickedButton}</h1>
        <div>
          <div>

          <ListItemComponent title="Create" click={this.click}/>
          </div>

          <div>
          <ListItemComponent title="Read" click={(title)=>this.setState({ lastClickedButton: title })} />
          </div>

          <div>
          <ListItemComponent title="Update"  click={(title)=>this.setState({ lastClickedButton: title })}/>
          </div>

          <div><ListItemComponent title="Delete" click={(title)=>this.setState({ lastClickedButton: title })}/></div> 
        </div>
      </div>
    );
  }
}


