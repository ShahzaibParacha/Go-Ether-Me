import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="projectbody">
      <header>
        <h1>About</h1>
        <br />
        <p>
          dApps are quite simply apps that are backed on the Ethereum network
          and operate by making secure changes on the blockchain that are
          permanent. The permanency aspect of dApps makes it a natural fit for
          activities that are meant to be permanently recorded.
        </p>
        <p>
          I picked the financial aspect and used it to create an app that would
          allow creators to innovate and come up with ideas that are wild and
          'out there' or something that they are passionate about, and they can
          then put them up on Go Ether Me and request funding for it. These
          funds will only be released if and only if a project can meet the 50%
          goal, that is their project should surpass more than 50% of its goal.
          This promises legitimacy of the project, and the dedication of users
          to the idea posed by the creator.
        </p>
        <br />
        <br />
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Web3</li>
          <li>SQLite</li>
          <li>Knex</li>
          <li>Express</li>
          <li>Axios</li>
        </ul>
      </header>
    </div>
  );
}
