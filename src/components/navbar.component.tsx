import React, { Component } from "react";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h3>Go Ether Me</h3>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="Login">Login</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  }
}
