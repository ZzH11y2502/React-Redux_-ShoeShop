import React, { Component } from "react";
import { Purchase } from "./redux/Constants/Constants";
import { connect } from "react-redux";

class CheckoutTicket extends Component {
  render() {
    var seatStyle = {};
    return (
      <div className="col-6 mt-5">
        <div className="checkoutTicket row">
          <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
          <br />
          <h4 className="ml-3"> Trạng thái ghế</h4>
          <br />
          <div className="col-6">
            <div>
              <strong className="gheDuocChon"></strong>
              <p>Ghế đã đặt</p>
            </div>
            <div>
              <strong className="gheDangChon"></strong>
              <p>checkoutTicket</p>
            </div>
            <div>
              <strong className="gheChuaChon"></strong>
              <p>Ghế chưa đặt</p>
            </div>
          </div>
          <div className="col-6">
            <h4>THông tin khách hàng</h4>
            <div className="thongTinKhachHang bg-light mr-4">
              <p>
                Tên Khách hàng: <strong className="nameCustomer"></strong>
              </p>
              <br />
              <p>
                Số ghế đặt: <strong className="numberSeats"></strong>
              </p>
              <br />
              <p>
                Mã số ghế: <strong className="seatCode"></strong>
              </p>
              <br />
              <p>Thành tiền:</p>

              <h4 className="tinhTien text-center"></h4>
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.props.handlePurchase();
                }}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handlePurchase: () => {
      let action = {
        type: Purchase,
      };
      dispatch(action);
    },
  };
};

export default connect(mapDispatchToProps)(CheckoutTicket);
