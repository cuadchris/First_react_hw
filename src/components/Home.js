import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>This is the Home Page</h1>
        <p>This is just filler text.</p>
        <small className="text-muted">
          You can click 'About' in the nav bar.
        </small>
      </div>
    );
  }
}
