import React, { Component } from "react";

export default class EventHandling extends Component {
  state = {
    user: "Alice",
  };
  handleChangeName = (name) => {
    this.setState({ user: name });
  };
  render() {
    return (
      <div>
        <h2>EventHandling</h2>

        <h3>{this.state.user}</h3>
        <button
          onClick={() => {
            this.handleChangeName("Tommy2");
          }}
        >
          Change name to Tommy
        </button>
      </div>
    );
  }
}
