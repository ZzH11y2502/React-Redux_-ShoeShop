import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    return <ItemShoe />;
  }
}

// connect () () ~ 2 hàm hàm 2nd nhậm tham số của hàm 1st
let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStateToProps)(ListShoe);
