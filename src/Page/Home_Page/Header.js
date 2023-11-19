import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" className="btn btn-primary">
          Home
        </NavLink>
        <NavLink to="/login" className="btn btn-success">
          Login
        </NavLink>
        <NavLink to="/learn-hook" className="btn btn-warning">
          Learn Hooks
        </NavLink>
      </div>
    );
  }
}
