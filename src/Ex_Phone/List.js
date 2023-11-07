import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    console.log(this.props.phoneList);
    return (
      <div className="row">
        {this.props.phoneList.map((item) => {
          return (
            <Item
              handleViewDetail={this.props.handleChangeDetail}
              phoneData={item}
            />
          );
        })}
      </div>
    );
  }
}
