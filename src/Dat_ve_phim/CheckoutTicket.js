import React, { Component } from "react";

export default class CheckoutTicket extends Component {
  render() {
    var seatStyle = {};
    return (
      <div className="w-50 t-30">
        <div className="checkoutTicket">
          <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
          <p className="gheDuocChon"></p>
          <p>Ghế đã đặt</p>
          <p className="gheDangChon">Ghế đang chọn</p>
          <p className="gheChuaChon">Ghế chưa đặt</p>
        </div>
      </div>
    );
  }
}
