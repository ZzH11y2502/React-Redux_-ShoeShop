import React, { Component } from "react";
import List from "./List";
import Detail from "./Detail";
import { phoneArr } from "./data";

export default class Ex_Phone extends Component {
  state = {
    phoneArr: phoneArr,
    phoneSelected: phoneArr[1],
  };

  handleChangeDetail = (phone) => {
    this.setState({ phoneSelected: phone });
  };
  render() {
    return (
      <div>
        <List
          handleChangeDetail={this.handleChangeDetail}
          phoneList={this.state.phoneArr}
        />
        <Detail detail={this.state.phoneSelected} />
      </div>
    );
  }
}
// có ôn :1
// ko : 0
