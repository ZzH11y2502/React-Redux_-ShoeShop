import React, { Component } from "react";
import "../../src/Dat_ve_phim/baiTapBookingTicket.css";
import DanhSachGhe from "./DanhSachGhe";
import CheckoutTicket from "./CheckoutTicket";

export default class Dat_ve_phim extends Component {
  render() {
    return (
      <div className="bookingMovie row justify-content-between">
        <DanhSachGhe />
        <CheckoutTicket />
      </div>
    );
  }
}
