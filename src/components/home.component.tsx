import React, { Component } from "react";
import logo from "../lo.png";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <body>
           <img src={logo} className="logo" alt="logo" height="100%"/>
      </body>
    );
  }
}
