import React, { Component } from "react";
import { connect } from "react-redux";
class ItemShoe extends Component {
  render() {
    return (
      <div className="row">
        {this.props.shoeArr.map((item, index) => {
          return (
            <div className="col-3 card" key={index}>
              <img className="w-100" src={item.image} alt="" />
              <br />

              <button
                className="btn btn-primary"
                onClick={() => {
                  this.props.addToCart(item);
                }}
              >
                Add
              </button>
              <button
                onClick={() => {
                  this.props.handleClickView(item);
                }}
                className="btn btn-info"
              >
                View
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
// add to cart

// dispatch lên store để update
const mapStateToProps = (state) => {
  // console.log(state.shoeReducer.shoeArr);
  return {
    shoeArr: state.shoeReducer.shoeArr,
    cart: state.shoeReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (data) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: data,
      };
      dispatch(action);
    },
    addToCart: (value) => {
      let action = {
        type: "ADD_TO_CART",
        payload: value,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemShoe);
