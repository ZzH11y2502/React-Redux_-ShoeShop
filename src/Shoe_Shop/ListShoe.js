import React, { Component } from "react";
import { connect } from "react-redux";
import Item_shoe from "./Item_shoe";

class ListShoe extends Component {
  render() {
    return (
      <div className="col-6">
        <Item_shoe />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
