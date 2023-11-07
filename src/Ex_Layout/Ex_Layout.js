import React, { Component } from "react";
import Header from "./Header";
import Navigate from "./Navigate";
import Footer from "./Footer";
import Content from "./Content";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div
            className="col-4 pr-0
          "
          >
            <Navigate />
          </div>
          <div className="col-8 pl-0">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
// rcc

// src ex
