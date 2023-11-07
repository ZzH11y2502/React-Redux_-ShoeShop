import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoProps extends Component {
  state = {
    name: "alice",
  };
  handleChangeName = (newName) => {
    this.setState({ name: newName });
  };
  render() {
    let title = "Profile Card";
    return (
      <div className="p-5 bg-warning">
        <h2>DemoProps</h2>
        <Profile
          content={title}
          name={this.state.name}
          handleChange={this.handleChangeName}
        />
        <button
          onClick={() => {
            this.handleChangeName("Tommy");
          }}
          className="btn btn-danger"
        >
          Tommy
        </button>
      </div>
    );
  }
}

// thông tin user đặt ở DemoProps

//  nơi hiển thị thông tin Profile
