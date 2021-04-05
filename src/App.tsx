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
import Project from "./components/project.component";
import Navbar from "./components/navbar.component";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/:id" component={Project} />
        <Route path="/404" exact component={Error} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

        // {/* <Route exact path="/projects" render={(props) => <Projects {...props} />} />
        // {/* <Route 
        // exact
        // path ="/:projectName"
        // render={(props) => <Project {...props} />}     
        // /> */} */}