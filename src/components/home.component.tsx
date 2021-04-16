import React from "react";
import logo from "../lo.png";
import "../App.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  var history = useHistory();
  var name: any;
  var password: any;
  const handleChangeOne = (e: any) => {
    e.preventDefault();
    name = e.target.value;
  };
  const handleChangeTwo = (e: any) => {
    e.preventDefault();
    password = e.target.value;
  };

  const handleDonation = (e: any) => {
    e.preventDefault();
    console.log(name, password); //here we will link to the smart contract transactory function
    history.push('/projects');

  };

  const Login = (props: any) => (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Login here</h3>
        <Input
          label="Name"
          type="text"
          name="name"
          onChange={handleChangeOne}
          value="name"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChangeTwo}
          value="amount"
        />
        <Button text="Login!" onSubmit={handleDonation} />
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

  const login = (
    <div className="app-container">
      <div className="row">
        <div className="col no-gutters">
          <Login />
        </div>
      </div>
    </div>
  );

  setTimeout(function() {
    window.location.replace('/projects');
  }, 5000);

  return (
    <div className="loginbody">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Home;
