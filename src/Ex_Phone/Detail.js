import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { tenSP, giaBan, cameraTruoc } = this.props.detail;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Camera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tenSP}</td>
            <td>{giaBan}</td>
            <td>{cameraTruoc}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
