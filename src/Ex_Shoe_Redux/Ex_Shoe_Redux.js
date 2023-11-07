import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "../Ex_Shoe/data";
// 1file chỉ export default 1 lần
export default class Ex_Shoe_Redux extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: [],
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <CartShoe />
        </div>
        <div className="col-6">
          <ListShoe />
        </div>
        <div className="col-12">
          <DetailShoe />
        </div>
      </div>
    );
  }
}
