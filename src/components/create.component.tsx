import React from "react";
import { useHistory } from "react-router-dom";

import "../App.css";
const axios = require('axios').default;

function Create() {
  const history = useHistory();
  var name: string;
  var goal: number;
  var category: string;

  const handleName = (e: any) => {
    e.preventDefault();
    name = e.target.value;
  };
  const handleGoal = (e: any) => {
    e.preventDefault();
    goal = e.target.value;
  };

  const handleCategory = (e: any) => {
    e.preventDefault();
    category = e.target.value;
  };
  const handleNewSubmission = (e: any) => {
    e.preventDefault();
    console.log(name, goal, category); //here we will link to the smart contract transactory function, and a db post request
    axios({
        method: "post",
        url: 'http://localhost:4000/New',
        data: {
            name: name,
            goal: goal,
            category: category
        },
      }).catch((error: any) => {
          console.log(error);
      }).then((response: any) => {
          console.log(response);
      });  
      history.push('/projects');
};

  const Checkout = (props: any) => (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Add a Project</h3>
        <Input
          label="Project Name"
          type="text"
          name="name"
          value="name"
          onChange={handleName}
        />
        <Input
          label="Goal"
          type="number"
          name="amount"
          value="amount"
          onChange={handleGoal}
        />
        <Input
          label="Category"
          type="text"
          name="category"
          value="amount"
          onChange={handleCategory}
        />
        <Button text="Add!" onSubmit={handleNewSubmission} />
      </div>
    </div>
  );

  const Input = (props: any) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input
          type={props.type}
          name={props.name}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      </div>
    </div>
  );

  const Button = (props: any) => (
    <button className="checkout-btn" type="button" onClick={props.onSubmit}>
      {props.text}
    </button>
  );

  const checkout = (
    <div className="app-container">
      <div className="row">
        <div className="col no-gutters">
          <Checkout />
        </div>
      </div>
    </div>
  );

  return (
    <body>
      <div className="projectbody">
        <br />
        <br />
        <br />
        <h1>Create New</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {checkout}
      </div>
    </body>
  );
}

export default Create;
