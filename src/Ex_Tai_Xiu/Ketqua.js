import React, { Component } from "react";
import { connect } from "react-redux";

class Ketqua extends Component {
  render() {
    return (
      <div className="display-4 text-center">
        <p>{this.props.luaChon}</p>
        <p>SoLuotThang: {this.props.soLuotThang}</p>
        <p>SoLuotChoi: {this.props.soLuotChoi}</p>
        <p>Ket Qua: {this.props.ketQua}</p>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    luaChon: state.luaChon,
    soLuotChoi: state.soLuotChoi,
    soLuotThang: state.SoLuotThang,
    ketQua: state.ketQua,
  };
};
export default connect(mapStateToProps)(Ketqua);
