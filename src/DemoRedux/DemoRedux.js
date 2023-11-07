// rcc
import React, { Component } from "react";
import { connect } from "react-redux";
// hooks useAbc

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <p>Number: {this.props.number}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.increaseNumber(10);
          }}
        >
          + Number
        </button>
      </div>
    );
  }
}

// lấy dữ liệu trên store của redux
const mapStateToProps = (state) => {
  return {
    number: state.demoReduxReducer.number,
  };
};

// Thay đổi dữ liệu trên store của redux
const mapDispatchToProps = (dispatch) => {
  return {
    increaseNumber: (payload) => {
      dispatch({
        type: "INCREASE_NUMBER",
        payload,
      });
    },
  };
};

// Higher order function
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

let connectV2 = (dispatch) => {
  dispatch("Hello saigon");
};

let sayHello = (message) => {
  console.log("🚀 ~ file: DemoRedux.js:52 ~ sayHello ~ message:", message);
};

connectV2(sayHello);
