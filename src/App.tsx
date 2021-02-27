import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"
import Home from "./components/home.component";
import Error from "./components/error.component";
import Login from "./components/login.component";
import Projects from "./components/projects.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/404" exact component={Error} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
