import React from "react";
import { Link } from "react-router-dom";

export default class Movies extends React.Component {

  render() {
    let {id, title} = this.props;
    return (
      <div className="item ">
        <Link to={`/${id}`} className='cover'>
          <img alt={title} src={require(`../images/${id}.jpg`)} />
          <div className="overlay">{title}</div>
        </Link>
      </div>
    );

  }

}


