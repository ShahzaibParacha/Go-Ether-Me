import React, { useEffect, useState } from "react";
import "../App.css";

function Project({ match }: any) {
  var name: string;
  var amount: number;

  useEffect(() => {
    fetchItem();
  }, []);

  
  const [item, setItem] = useState([]);
  const itemArray: any[] = Array.of(item);
  var goalMet = false;
  if (itemArray[0].goal - itemArray[0].pledged < 0) {
    goalMet = true;
  } else {
    goalMet = false;
  }

    const handleChangeOne = (e: any) => {
      e.preventDefault();
      name = e.target.value;

    }
    const handleChangeTwo = (e: any) => {
      e.preventDefault();
      amount = e.target.value;
    }

    const handleDonation = (e: any) => {
      e.preventDefault();
      console.log(name, amount); //here we will link to the smart contract transactory function
    }

  const Checkout = (props: any) => (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Contribute</h3>
        <Input label="Name" type="text" name="name" onChange={handleChangeOne} value = "name"/>
        <Input label="Amount" type="number" name="amount" onChange={handleChangeTwo} value = "amount"/>
        <Button text="Donate!" onSubmit={handleDonation}/>
      </div>
    </div>
  );

  const Input = (props: any) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} />
      </div>
    </div>
  );

  const Button = (props: any) => (
    <button className="checkout-btn" type="button" onClick={props.onSubmit}    >
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


  var statement;
  if (goalMet) {
    itemArray.map(
      (item) =>
        (statement = (
          <div>
            <h2>{item.name} has already met their goal.</h2>
          </div>
        ))
    );
  } else {
    itemArray.map(
      (item) =>
        (statement = (
          <div>
            <h2>
              Support {item.name} by helping them reach their goal of $
              {item.goal}.
            </h2>
            <h2>They still need ${item.goal - item.pledged}.</h2>
          </div>
        ))
    );
  }

  const fetchItem = async () => {
    const itemValue = await fetch(`http://localhost:5000/${match.params.id}`);
    const itemExtract = await itemValue.json();
    console.log(itemExtract.currentProject[0]);
    setItem(itemExtract.currentProject[0]);
  };

  return (
    <div className="projectbody">
      <br />
      <br />
      <br />
      {itemArray.map((item) => (
        <h1>{item.name}</h1>
      ))}
      <br />
      <br />
      <br />
      {itemArray.map((item) => (
        <h2>Goal: ${item.goal}</h2>
      ))}
      <br />
      {itemArray.map((item) => (
        <h2>Pledged as of today: ${item.pledged}</h2>
      ))}
      <br />
      {itemArray.map((item) => (
        <h2>Niche: {item.main_category}</h2>
      ))}
      <br />
      {itemArray.map((item) => (
        <h2>Category: {item.category}</h2>
      ))}
      <br />
      {itemArray.map((item) => (
        <h2>Believers: {item.backers}</h2>
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {statement}
      {checkout}
    </div>
  );
}

export default Project;
