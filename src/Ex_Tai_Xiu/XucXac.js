import React, { Component } from "react";
import { connect } from "react-redux";
import { LUACHON, PLAYGAME, TAI, XIU } from "./redux/Constant/xucXac";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucXacArr.map((item, index) => {
      return <img src={item.img} key={index} alt="" />;
    });
  };
  render() {
    // render

    console.log(this.props.xucXacArr);
    return (
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center pt-5">
          <button
            className="btn btn-dark p-4"
            onClick={() => {
              this.props.handleLuaChon(TAI);
            }}
          >
            Tài
          </button>
          {this.renderXucXac()}
          <button
            className="btn btn-danger p-4"
            onClick={() => {
              this.props.handleLuaChon(XIU);
            }}
          >
            Xỉu
          </button>
        </div>
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            this.props.handlePlayGame();
          }}
        >
          Play Game
        </button>
      </div>
    );
  }
}
// Lay data về
let mapStateToProps = (state) => {
  return {
    xucXacArr: state.xucXacArr,
    luaChon: state.luaChon,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({ type: PLAYGAME });
    },
    handleLuaChon: (value) => {
      let action = {
        type: LUACHON,
        payload: value,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);

/**
 * 1. viết reducer case lựa chọn
 * 2. vào kết quả show lựa chọn => mapStatetoProps
 * 3. thay đổi lựa chọn => mapDispatchtoProps
 */
