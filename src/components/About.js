import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>This is the about page for {this.props.name}</h1>
        <small className="text-muted">The name above was passed in using a prop. So cool!</small>
        <p>This is more filler text.</p>
      </div>
    );
  }
}
