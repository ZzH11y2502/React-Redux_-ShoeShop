import React, { Component } from "react";
import axios from "axios";
export default class DemoLifeCycle extends Component {
  componentDidMount() {
    console.log("didMount");
    axios({
      url: `https://tiki.vn/api/v2/products/widget/delivery_info/9856925?platform=web&pdp=v2`,
      method: "GET",
    })
      .then(function (response) {
        console.log(response.data.only_sell_to);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  render() {
    console.log("render");
    return <div>DemoLifeCycle</div>;
  }
}

/**
 * Mounting: 1 lần (Sinh ra)
 *
 * Update: Nhiều lần (Cập nhât)
 *
 * Unmounting: 1 lần (Biến mất khỏi layout)
 */
