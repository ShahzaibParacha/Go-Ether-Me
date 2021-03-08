import React, { Component } from "react";
import "../App.css";

const Data = [
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
  {
    name: "Foldable Phones",
    vision: "Phones that fold.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 1,
    url: "www.something.com/lexisfoldablephones",
    goal: 80000,
    amassed: 2200,
    hits: 28,
    currency: "$",
  },
  {
    name: "nD Turntables",
    vision: "Turntables with a twist and no need for a disc.",
    description: "Allow users to have a phone that fold and unfolds",
    id: 2,
    url: "www.something.com/ndturntables",
    goal: 66000,
    amassed: 800,
    hits: 28,
    currency: "$",
  },
];

export default class Projects extends Component {
  projectData: any;
  constructor(props: any) {
    super(props);
    this.projectData = Data;
  }

  trial = (projectID: any) => {
    console.log(projectID);
    return (
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="date">Category</span>
          <h2>{projectID["name"]}</h2>
          <p>{projectID["vision"]}</p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="value">${projectID["goal"]}</div>
            <div className="type">Target</div>
          </div>
          <div className="stat border">
            <div className="value">${projectID["amassed"]}</div>
            <div className="type">Amassed</div>
          </div>
          <div className="stat">
            <div className="value">{projectID["hits"]}</div>
            <div className="type">Beleivers</div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <body>
        <header>
          <h1>Projects</h1>
        </header>
        <div className="wrapper">
          {this.projectData.map((projectID: any) => this.trial(projectID))}
        </div>
      </body>
    );
  }
}
