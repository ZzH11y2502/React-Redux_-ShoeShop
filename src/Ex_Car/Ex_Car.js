import React, { Component } from "react";

export default class Ex_Car extends Component {
  state = {
    color: "red",
  };
  hanldeChangeColor = (color) => {
    this.setState({ color: color });
  };
  render() {
    return (
      <div>
        <img
          width={200}
          src={`./img_ex/CarBasic/products/${this.state.color}-car.jpg`}
          alt=""
        />
        <button
          onMouseOver={() => {
            this.hanldeChangeColor("red");
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onMouseOver={() => {
            this.hanldeChangeColor("black");
          }}
          className="btn btn-dark"
        >
          Black
        </button>
        <button
          onMouseOver={() => {
            this.hanldeChangeColor("silver");
          }}
          className="btn btn-secondary"
        >
          Silver
        </button>
      </div>
    );
  }
}
