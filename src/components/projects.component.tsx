import React, { Component } from "react";
import "../App.css";

export default class Projects extends Component {
  render() {
    return (
      <body>
        <header>
          <h1>Projects</h1>
        </header>
        <div className="xop-section">
          <ul className="xop-grid">
            <li>
              <div className="tile-item">
                <a href="/"></a>
                <h3>Item 1</h3>
                <p>Desc 1</p>
              </div>
            </li>
            <li>
              <div className="tile-item">
                <a href="/"></a>
                <h3>Item 2</h3>
                <p>Desc 2</p>
              </div>
            </li>
            <li>
              <div className="tile-item">
                <a href="/"></a>
                <h3>Item 3</h3>
                <p>Desc 3</p>
              </div>
            </li>
            <li>
            <div className="tile-item">
              <a href="/"></a>
              <h3>Item 1</h3>
              <p>Desc 1</p>
            </div>
          </li>          <li>
            <div className="tile-item">
              <a href="/"></a>
              <h3>Item 1</h3>
              <p>Desc 1</p>
            </div>
          </li>          <li>
            <div className="tile-item">
              <a href="/"></a>
              <h3>Item 1</h3>
              <p>Desc 1</p>
            </div>
          </li>          <li>
            <div className="tile-item">
              <a href="/"></a>
              <h3>Item 1</h3>
              <p>Desc 1</p>
            </div>
          </li>
          </ul>
        </div>
      </body>
    );
  }
}
