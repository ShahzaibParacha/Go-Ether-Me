import React, { Component } from "react";
import logo from "../lo.png";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home-header">
           <img src={logo} className="home-logo" alt="logo" />
      </div>
    );
  }
}
