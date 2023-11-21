import React, { Component } from "react";
import SquareOfCheckboxTable from "./Ds_ghe";
import { ChairConfirm, Confirm } from "./redux/Constants/Constants";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  render() {
    return (
      <div className="col-6">
        <p className="text-warning text-center display-4">Đặt vé xem phim</p>
        <div className="text-center display-5">
          <input
            className="mr-10"
            id="inputName"
            type="text"
            placeholder="Họ và tên"
          />
          <input
            type="number"
            id="chairsNumber"
            className="mr-10"
            placeholder="Số ghề muốn đặt"
          />
        </div>
        <div className="">
          <button
            className="btn btn-warning spacing"
            onClick={() => {
              this.props.handleInput();
            }}
          >
            Select your seat
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              this.props.handleConfirm();
            }}
          >
            Confirm selection
          </button>
        </div>
        <p className="text-center text-light display-5 screen">Màn hình</p>
        <br />
        <SquareOfCheckboxTable />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    seatsInput: state.seatsInput,
    nameCustomer: state.nameCustomer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleInput: () => {
      let action = {
        type: ChairConfirm,
      };
      dispatch(action);
    },
    handleConfirm: () => {
      let action = {
        type: Confirm,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);
