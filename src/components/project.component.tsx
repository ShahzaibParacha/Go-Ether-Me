import React, { Component } from "react";
import "../App.css";

export default class Project extends Component {
  projectID: Number;
  constructor(props: any) {
    super(props);
    const { match } = props;
    const { params } = match;
    const { projectID } = params;
    this.projectID = projectID;
  }

  render() {
    return (
      <body>
        <header>
          <h1>Project# {this.projectID}</h1>
        </header>
      </body>
    );
  }
}
