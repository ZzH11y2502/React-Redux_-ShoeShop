import React, { Component } from "react";
import XucXac from "./XucXac";
import Ketqua from "./Ketqua";
import "./style.css";

export default class Ex_Tai_Xiu extends Component {
  render() {
    return (
      <div
        className="game-container"
        style={{
          backgroundImage: `url(
            https://baitap-react-redux-gamexucxac.vercel.app/static/media/bgGame.e49605597dae0136a330.png
          )`,
        }}
      >
        <XucXac />
        <Ketqua />
      </div>
    );
  }
}
