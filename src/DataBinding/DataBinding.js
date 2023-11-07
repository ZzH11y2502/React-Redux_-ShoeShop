import React, { Component } from "react";

export default class DataBinding extends Component {
  email = "alice@gmail.com";
  avatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay2uTY2SEedEffAMiAc3F_OkO34Sz_G4N_CCpjmF4xOFWBAre7o9mwY3nXV6b_aZU16E&usqp=CAU";
  renderButton = () => {
    return <button className="btn btn-danger">Click me</button>;
    // hàm ko có return => trả về undefined
  };
  render() {
    let username = "Alice";
    // databinding ~ {}
    return (
      <div>
        <h2>DataBinding</h2>
        <h3>User profile</h3>
        <p> Username : {username} </p>
        <p>Gmail : {this.email}</p>
        <img src={this.avatar} alt="" />
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
      </div>
    );
  }
}
