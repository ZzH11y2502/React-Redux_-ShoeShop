import React, { Component } from "react";
import { connect } from "react-redux";
import { InputSeat } from "./redux/Constants/Constants";
import { chairList } from "./chairList";
class SquareOfCheckboxTable extends Component {
  render() {
    var seatStyles = {
      display: "inline-block",
    };
    var selectedButtonStyles = {};
    return (
      <div id="idTable">
        {this.props.chairList.map((rowChair, key) => {
          return (
            <div className="flex" key={key}>
              <p className="seats text-center" style={seatStyles}>
                {rowChair.hang}
              </p>
              <span>
                {rowChair.danhSachGhe.map((seat, seatIndex) => (
                  <button
                    className="seats text-center"
                    onClick={() => {
                      this.props.handleSeat(seat, seatIndex);
                    }}
                    style={
                      (seatStyles = {
                        backgroundColor: seat.daDat ? "orange" : "",
                      })
                    }
                    key={seatIndex}
                  >
                    {seat.soGhe}
                    {seat.daDat ? seat.daDat.toString() : "false"}
                  </button>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    chairList: state.chairList,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSeat: (value, index) => {
      let action = {
        type: InputSeat,
        payload: value,
        index: index,
      };
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquareOfCheckboxTable);
