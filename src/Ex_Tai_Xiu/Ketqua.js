import React, { Component } from "react";
import { connect } from "react-redux";

class Ketqua extends Component {
  render() {
    return (
      <div className="display-4 text-center">
        <p>{this.props.luaChon}</p>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    luaChon: state.luaChon,
  };
};
export default connect(mapStateToProps)(Ketqua);
