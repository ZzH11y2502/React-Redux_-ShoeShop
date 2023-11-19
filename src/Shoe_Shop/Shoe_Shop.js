import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import Detail_Shoe from "./Detail_Shoe";

export default class Shoe_Shop extends Component {
  render() {
    return (
      <div className="row">
        <CartShoe />
        <ListShoe />
        <Detail_Shoe />
      </div>
    );
  }
}
